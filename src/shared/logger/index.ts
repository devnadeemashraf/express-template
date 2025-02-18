import winston from "winston";

import prisma from "@/shared/database/prisma";
import AppError from "@/shared/utils/app-error";
import config from "@/shared/config";

export const LogLevel = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  CRITICAL: "critical",
};

export type TLogType = keyof typeof LogLevel;

export interface ILogRequestResponseData {
  id: string;
  timestamp: Date;
}

class Logger {
  private logger: winston.Logger;

  constructor() {
    // Determine the transport based on environment
    if (config.nodeEnv === "development") {
      this.logger = winston.createLogger({
        level: LogLevel.INFO,
        format: winston.format.simple(),
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.colorize(),
              winston.format.simple()
            ),
          }),
          new winston.transports.File({ filename: "logs/development.log" }), // Log to a file in development
        ],
      });
    } else {
      // In production or other environments, we log to PostgreSQL
      this.logger = winston.createLogger({
        level: LogLevel.INFO,
        format: winston.format.simple(),
        transports: [
          new winston.transports.Console({
            format: winston.format.combine(
              winston.format.colorize(),
              winston.format.simple()
            ),
          }),
        ],
      });
    }
  }

  // Log to console and file
  log(
    level: TLogType,
    message: string,
    route: string,
    controller: string,
    data?: any
  ) {
    this.logger.log({
      level: LogLevel[level],
      message,
    });

    if (config.nodeEnv !== "development") {
      // Log to PostgreSQL if not in development
      this.registerToDatabase(level, message, route, controller, data);
    }
  }

  // Log to Database using Prisma for Production Builds
  private async registerToDatabase(
    level: TLogType,
    message: string,
    route: string,
    controller: string,
    data?: any
  ) {
    try {
      await prisma.logs.create({
        data: {
          id: data.id,
          level: LogLevel[level],
          message: message,
          route: route,
          controller: controller,
          createdAt: data.timestamp,
        },
      });
    } catch (error) {
      throw new AppError(
        "Error logging to Database: " + (error as Error).message,
        "INTERNAL_SERVER_ERROR"
      );
    }
  }
}

const logger = new Logger();
export default logger;

import cors from "cors";
import express, { Router } from "express";
import type { Express, Request, Response, NextFunction } from "express";

import healthRouter from "@/modules/health/routes";
import { openAPIRouter } from "@/shared/api-docs/openAPI-router";

import errorHandler from "@/shared/middleware/error-handler-middleware";
import loggerMiddleware from "@/shared/middleware/logger-middleware";

import config from "@/shared/config";

const app: Express = express();

// Middlewares
app.use(loggerMiddleware);
app.use(
  express.json({
    limit: "1mb",
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Routes
app.use(config.api.v1 + "/health", healthRouter);

// Swagger Docs
app.use(openAPIRouter);

// Middlewares
app.use(errorHandler);

// 'express' instance export
export default app;

// 'express' package export
export { Router };

// 'express' package types export
export { Express, Request, Response, NextFunction };

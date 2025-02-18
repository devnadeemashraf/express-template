import { ILogRequestResponseData } from "@/shared/logger";
import { Request } from "express";

declare global {
  namespace Express {
    interface Request {
      logInfo: Partial<ILogRequestResponseData>;
    }
  }
}

import { ILogRequestResponseData } from "@/shared/logger";
import { Request } from "@/app";

declare global {
  namespace Express {
    interface Request {
      logInfo: Partial<ILogRequestResponseData>;
    }
  }
}

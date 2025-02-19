import { Request, Response, NextFunction } from "@/app";

import ResponseHandler from "@/shared/utils/response-handler";
import AppError from "@/shared/utils/app-error";
import config from "@/shared/config";

const errorHandler = (
  _error: AppError,
  _request: Request,
  _response: Response,
  _next: NextFunction
) => {
  const isDevelopment = config.nodeEnv === "development";
  ResponseHandler.sendResponse(_response, "ERROR", _error.status, undefined, {
    description: _error.message,
    data: _error.data ? _error.data : undefined,
    code: isDevelopment ? _error.code : undefined,
    cause: isDevelopment ? _error.cause : undefined,
    name: isDevelopment ? _error.name : undefined,
    stack: isDevelopment ? _error.stack : undefined,
  });

  return;
};

export default errorHandler;

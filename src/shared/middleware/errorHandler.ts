import { Request, Response, NextFunction } from "@/app";

import ResponseHandler from "@/shared/utils/responseHandler";
import AppError from "@/shared/utils/appError";
import config from "@/shared/config";

const errorHandler = (
  _error: AppError,
  _request: Request,
  _response: Response,
  _next: NextFunction
) => {
  ResponseHandler.sendResponse(_response, "ERROR", _error.status, undefined, {
    message: _error.message,
    stack: config.nodeEnv === "development" ? _error.stack : undefined,
  });

  return;
};

export default errorHandler;

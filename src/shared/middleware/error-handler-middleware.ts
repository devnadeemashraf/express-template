import { Request, Response, NextFunction } from "@/app";
import ResponseHandler from "@/shared/utils/response-handler";
import AppError from "@/shared/utils/app-error";
import config from "@/shared/config";
import { THTTPStatus } from "@/shared/utils/http-codes";

const errorHandler = (
  _error: AppError,
  _request: Request,
  _response: Response,
  _next: NextFunction
) => {
  const isDevelopment = config.nodeEnv === "development";

  // Determine appropriate status based on error
  const status: THTTPStatus = _error.status || "INTERNAL_SERVER_ERROR";

  ResponseHandler.sendResponse(
    _response,
    status,
    undefined,
    {
      description: _error.message,
      data: _error.data || undefined,
      ...(isDevelopment && {
        code: _error.code,
        cause: _error.cause,
        name: _error.name,
        stack: _error.stack,
      }),
    },
    undefined
  );
};

export default errorHandler;

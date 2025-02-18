import { v4 as uuidv4 } from "uuid";

import { Request, Response, NextFunction } from "@/app";

import logger, { ILogRequestResponseData } from "@/shared/logger";
import { beutifyLogs } from "@/shared/utils/logger";

const loggerMiddleware = (
  _request: Request,
  _response: Response,
  _next: NextFunction
) => {
  // Generate Unique ID for the incoming request
  const uniqueRequestID = uuidv4();
  const requestTimestamp = new Date();

  const logInfo: ILogRequestResponseData = {
    id: uniqueRequestID,
    timestamp: requestTimestamp,
  };

  // Attach it to the request object
  _request.logInfo = logInfo;

  // To capture the response and correlate it with the request ID
  const originalSend = _response.send;

  // Override the send method to capture the response body
  _response.send = function (body?: any): Response {
    // Optionally sanitize sensitive data from the body before logging

    // Log the response with the uniqueRequestId
    logger.log(
      _response.statusCode < 300 ? "INFO" : "ERROR",
      beutifyLogs(
        "RESPONSE",
        uniqueRequestID,
        new Date(),
        method,
        route,
        _response.statusCode,
        body
      ),
      route,
      controller,
      logInfo
    );

    // Call the original _response.send
    return originalSend.call(this, body);
  };

  const route = _request.originalUrl;
  const controller = _request.baseUrl;
  const method = _request.method;

  // Log the incoming request
  logger.log(
    "INFO",
    beutifyLogs("REQUEST", uniqueRequestID, requestTimestamp, method, route),
    route,
    controller,
    logInfo
  );

  // Continue to the next middleware/route handler
  _next();
};

export default loggerMiddleware;

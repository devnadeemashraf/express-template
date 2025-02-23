import { Request, Response, NextFunction } from "@/app";

import { IAPIResponse } from "@/shared/interfaces/api-response";

import AppError from "@/shared/utils/app-error";
import ResponseHandler from "@/shared/utils/response-handler";

/**
 * Ques: Why Abstract?
 * Ans: Understand what 'abstract' keyword does.
 * It actually allows you to create classes that cannot be instantiated directly. It servers a very good purpose as it allows you to create blue-prints for other classes.
 */
abstract class BaseController {
  /**
   * Helper method for handling response with decorators
   */
  protected async handleRequest<T>(
    _request: Request,
    _response: Response,
    _next: NextFunction,
    serviceCall: () => Promise<IAPIResponse<T>>
  ): Promise<void> {
    try {
      const { status, data, error, message, meta } = await serviceCall();
      ResponseHandler.sendResponse(
        _response,
        status,
        data,
        error,
        message,
        meta
      );
    } catch (error) {
      _next(
        error instanceof AppError
          ? error
          : new AppError("Service Error", "INTERNAL_SERVER_ERROR", error)
      );
    }
  }

  /**
   * Helper method for direct response handling (when not using decorator)
   */
  protected async sendResponse<T>(
    _response: Response,
    _apiResponse: IAPIResponse<T>
  ): Promise<void> {
    const { status, data, error, message, meta } = _apiResponse;
    ResponseHandler.sendResponse(_response, status, data, error, message, meta);
  }
}

export default BaseController;

import { Response } from "@/app";
import { APIResponse } from "@/shared/interfaces/api-response";

import { HTTPStatusWithCode, THTTPStatus } from "@/shared/utils/http-codes";

class ResponseHandler {
  // Prevents Instance Creation
  private constructor() {}

  static sendResponse<T>(
    _resp: Response,
    _type: "OK" | "PENDING" | "ERROR" = "OK",
    _status: THTTPStatus = "OK",
    _data: T,
    _error?: any,
    _message?: string,
    _meta?: any
  ) {
    const { code, message } = HTTPStatusWithCode[_status];
    const response: APIResponse<T> = {
      status: _type,
      message: _message ? _message : message,
      data: _data,
      error: _error,
      meta: _meta,
    };
    _resp.status(code).json(response);
  }
}

export default ResponseHandler;

import { HTTPStatusWithCode, THTTPStatus } from "./httpCodes";

class AppError extends Error {
  readonly code: Number;
  readonly status: THTTPStatus;

  constructor(_message: string, _status: THTTPStatus) {
    const { code, message } = HTTPStatusWithCode[_status];
    super(_message ? _message : message);

    this.code = code;
    this.status = _status;
  }
}

export default AppError;

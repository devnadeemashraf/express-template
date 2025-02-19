import { HTTPStatusWithCode, THTTPStatus } from "./http-codes";

class AppError extends Error {
  readonly code: Number;
  readonly status: THTTPStatus;
  readonly data: any;

  constructor(_message: string, _status: THTTPStatus, _data?: any) {
    const { code, message } = HTTPStatusWithCode[_status];
    super(_message ? _message : message);

    this.code = code;
    this.status = _status;
    this.data = _data ? _data : undefined;
  }
}

export default AppError;

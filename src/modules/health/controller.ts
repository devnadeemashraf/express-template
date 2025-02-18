import { Request, Response } from "@/app";
import AppError from "@/shared/utils/appError";

import ResponseHandler from "@/shared/utils/responseHandler";

class HealthController {
  getHealth(_req: Request, _resp: Response) {
    void ResponseHandler.sendResponse(
      _resp,
      "OK",
      "OK",
      undefined,
      undefined,
      "Server is Running!",
      undefined
    );
  }

  getErrorTest(_req: Request, _resp: Response) {
    throw new AppError(
      "Trying to Throw an Error to see if it was caught",
      "FORBIDDEN"
    );
  }
}

export default new HealthController();

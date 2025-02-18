import { Request, Response } from "@/app";

import ResponseHandler from "@/shared/utils/response-handler";

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
}

export default new HealthController();

import { NextFunction, Request, Response } from "@/app";
import { IAPIResponse } from "@/shared/interfaces/api-response";

export interface IHealthController {
  getHealth: (
    _req: Request,
    _resp: Response,
    _next: NextFunction
  ) => Promise<void>;
}

export interface IHealthService {
  getServerHealth: () => Promise<IAPIResponse<undefined>>;
}

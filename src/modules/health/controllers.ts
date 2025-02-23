import { NextFunction, Request, Response } from "@/app";

import HealthService from "./services";

import BaseController from "@/shared/utils/base-controller";

import { Controller } from "@/shared/decorators/controller";

class HealthController extends BaseController {
  constructor(private readonly healthService: HealthService) {
    super();
  }

  @Controller()
  async getHealth(
    _request: Request,
    _response: Response,
    _next: NextFunction
  ): Promise<void> {
    this.handleRequest(_request, _response, _next, async () => {
      return await this.healthService.getServerHealth();
    });
  }
}

export default new HealthController(new HealthService());

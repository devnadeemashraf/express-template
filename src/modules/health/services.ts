import { IHealthService } from "./interfaces";

import { IAPIResponse } from "@/shared/interfaces/api-response";

class HealthService implements IHealthService {
  async getServerHealth(): Promise<IAPIResponse<undefined>> {
    // Perform health checks here
    // Example: await this.checkDatabaseConnection();
    // Example: await this.checkCacheConnection();
    const serviceResponse: IAPIResponse<undefined> = {
      status: "OK",
      message: "Server is Running!",
      data: undefined,
      error: undefined,
      meta: undefined,
    };

    return serviceResponse;
  }
}

export default HealthService;

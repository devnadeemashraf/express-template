import AppError from "@/shared/utils/app-error";
import { IAPIResponse } from "@/shared/interfaces/api-response";

export abstract class BaseService {
  protected async handleServiceResponse<T>(
    serviceCall: () => Promise<IAPIResponse<T>>
  ): Promise<IAPIResponse<T>> {
    try {
      const { status, message, data, error, meta } = await serviceCall();
      return {
        status,
        message,
        data,
        error,
        meta,
      };
    } catch (error) {
      this.handleError(error);
    }
  }

  protected handleError(
    error: unknown,
    message = "Service Operation Failed"
  ): never {
    if (error instanceof AppError) {
      throw error;
    }
    throw new AppError(
      (error as Error)?.message || message,
      "INTERNAL_SERVER_ERROR",
      error
    );
  }
}

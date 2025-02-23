import * as z from "zod";

import { THTTPStatus } from "@/shared/utils/http-codes";

export interface IServiceResponse<T = null> {
  status: THTTPStatus;
  message: string;
  data: T | null | undefined;
}

export const ServiceResponseSchema = <T extends z.ZodTypeAny>(
  dataSchema: T
) => {
  return z.object({
    status: z.string(),
    message: z.string(),
    data: dataSchema.optional(),
  });
};

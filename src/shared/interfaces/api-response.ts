import * as z from "zod";

import { THTTPStatus } from "@/shared/utils/http-codes";

interface IAPIResponseError {
  description: string;
  code: string;
  cause: string;
  name: string;
  stack: string;
}

export interface IAPIResponse<T = null> {
  status: THTTPStatus;
  message: string;
  data: T | null | undefined;
  error: Partial<IAPIResponseError> | null | undefined;
  meta?: any | null | undefined;
}

export const APIResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) => {
  return z.object({
    status: z.string(),
    message: z.string(),
    data: dataSchema.optional(),
    error: z
      .object({
        description: z.string(),
        code: z.string(),
        cause: z.string(),
        name: z.string(),
        stack: z.string(),
      })
      .optional(),
    meta: z.object({}).optional(),
  });
};

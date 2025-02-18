import * as z from "zod";

export interface APIResponse<T = null> {
  status: "OK" | "PENDING" | "ERROR";
  message: string;
  data: T | null | undefined;
  error:
    | Partial<{
        description: string;
        code: string;
        cause: string;
        name: string;
        stack: string;
      }>
    | null
    | undefined;
  meta?: any | null | undefined;
}

export const APIResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) => {
  return z.object({
    status: z.string(),
    message: z.string(),
    data: dataSchema.optional(),
    error: z.object({}).optional(),
    meta: z.object({}).optional(),
  });
};

import type { z } from "zod";
import { HTTPStatusWithCode, THTTPStatus } from "@/shared/utils/http-codes";

import { APIResponseSchema } from "@/shared/interfaces/api-response";

export function createApiResponse(
  schema: z.ZodTypeAny,
  description: string,
  statusCode: THTTPStatus = "OK"
) {
  const { code } = HTTPStatusWithCode[statusCode];
  return {
    [code]: {
      description,
      content: {
        "application/json": {
          schema: APIResponseSchema(schema),
        },
      },
    },
  };
}

// Use if you want multiple responses for a single endpoint

// import { ResponseConfig } from '@asteasolutions/zod-to-openapi';
// import { ApiResponseConfig } from '@common/models/openAPIResponseConfig';
// export type ApiResponseConfig = {
//   schema: z.ZodTypeAny;
//   description: string;
//   statusCode: StatusCodes;
// };
// export function createApiResponses(configs: ApiResponseConfig[]) {
//   const responses: { [key: string]: ResponseConfig } = {};
//   configs.forEach(({ schema, description, statusCode }) => {
//     responses[statusCode] = {
//       description,
//       content: {
//         'application/json': {
//           schema: ServiceResponseSchema(schema),
//         },
//       },
//     };
//   });
//   return responses;
// }

import * as z from "zod";

import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "@/modules/api-docs/openAPI-response-builder";

const healthCheckRegistry = new OpenAPIRegistry();

healthCheckRegistry.registerPath({
  method: "get",
  path: "/api/v1/health",
  tags: ["Health Check"],
  responses: createApiResponse(z.null(), "Success", "OK"),
});

export default healthCheckRegistry;

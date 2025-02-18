import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";

// Import All OpenAPI Registeries
import healthCheckRegistry from "@/modules/health/openAPI-registry";

export function generateOpenAPIDocument() {
  const registry = new OpenAPIRegistry([healthCheckRegistry]);

  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Express TypeScript API",
      version: "1.0.0",
      description: "Production-ready API Documentation",
    },
    externalDocs: {
      description: "View the raw OpenAPI Specification in JSON format",
      url: "/swagger.json",
    },
  });
}

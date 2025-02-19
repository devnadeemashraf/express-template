import { ZodError } from "zod";

import { Request, Response, NextFunction } from "@/app";

import {
  IValidationError,
  IValidatorSchema,
  TRequestLocation,
} from "@/shared/interfaces/request-validator";

import AppError from "@/shared/utils/app-error";

const requestValidator = ({
  body: bodySchema,
  params: paramsSchema,
  query: querySchema,
}: IValidatorSchema) => {
  return async (
    _request: Request,
    _response: Response,
    _next: NextFunction
  ) => {
    try {
      const validatePart = async (
        schema: typeof bodySchema | typeof paramsSchema | typeof querySchema,
        data: any,
        location: TRequestLocation
      ) => {
        if (schema && data) {
          try {
            const validated = await schema.parseAsync(data);
            return { validated, location };
          } catch (error) {
            if (error instanceof ZodError) {
              const enhancedErrors: IValidationError[] = error.errors.map(
                (err: any) => ({
                  ...err,
                  location,
                  expected: err.expected || schema.description || "unknown",
                  received: err.received || "undefined",
                })
              );

              throw new AppError(
                `Invalid ${location} parameters`,
                "BAD_REQUEST",
                {
                  validationErrors: enhancedErrors,
                  schemaExpectation: {
                    location,
                    expectedSchema: schema.description || schema.toString(),
                  },
                }
              );
            }
            throw error;
          }
        }
        return null;
      };

      // Validate all parts concurrently
      const results = await Promise.allSettled([
        validatePart(bodySchema, _request.body, "body"),
        validatePart(paramsSchema, _request.params, "params"),
        validatePart(querySchema, _request.query, "query"),
      ]);

      // Collect all validation errors
      const errors: IValidationError[] = [];
      results.forEach((result) => {
        if (result.status === "rejected") {
          if (result.reason instanceof AppError) {
            errors.push(...result.reason.data.validationErrors);
          }
        } else if (result.status === "fulfilled" && result.value) {
          // Update the request with validated data
          const { validated, location } = result.value;
          (_request as any)[location] = validated;
        }
      });

      if (errors.length > 0) {
        throw new AppError("Validation Failed", "BAD_REQUEST", errors);
      }

      // Pass Control Ahead
      _next();
    } catch (error) {
      if (error instanceof AppError) {
        _next(error);
      } else if (error instanceof ZodError) {
        _next(
          new AppError("Incomplete or Bad Payload", "BAD_REQUEST", {
            description: "Validation failed",
            validationErrors: error.errors,
          })
        );
      } else {
        _next(
          new AppError("Request Validation Error", "INTERNAL_SERVER_ERROR", {
            description: (error as Error).message,
            stack: (error as Error).stack,
          })
        );
      }
    }
  };
};

export default requestValidator;

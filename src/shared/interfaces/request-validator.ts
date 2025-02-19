import * as z from "zod";

export type TRequestLocation = "body" | "params" | "query";

export interface IValidationError {
  code: string;
  expected: string;
  received: string;
  path: (string | number)[];
  message: string;
  location: TRequestLocation;
}

export interface IValidatorSchema {
  body?: z.ZodSchema;
  params?: z.ZodSchema;
  query?: z.ZodSchema;
}

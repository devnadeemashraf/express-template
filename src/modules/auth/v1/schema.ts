import { z } from "zod";

import { zodErrorMessage } from "@/shared/constants";
import { IValidatorSchema } from "@/shared/interfaces/request-validator";

export const loginSchema: IValidatorSchema = {
  body: z.object({
    username: z
      .string({
        message: zodErrorMessage.invalidType("'Username'", "'String'"),
      })
      .min(4, zodErrorMessage.minimumLength("'Username'", 4)),
    password: z
      .string({
        message: zodErrorMessage.invalidType("'Password'", "'String'"),
      })
      .min(6, zodErrorMessage.minimumLength("'Password'", 6)),
  }),
};

export const registerSchema: IValidatorSchema = {
  body: z.object({
    username: z
      .string({
        message: zodErrorMessage.invalidType("'Username'", "'String'"),
      })
      .min(4, zodErrorMessage.minimumLength("'Username'", 4)),
    password: z
      .string({
        message: zodErrorMessage.invalidType("'Password'", "'String'"),
      })
      .min(6, zodErrorMessage.minimumLength("'Password'", 6)),
  }),
};

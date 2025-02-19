import { Router } from "@/app";

import { requestValidator } from "@/shared/middleware";

import { loginSchema, registerSchema } from "./schema";

const authRouter = Router({
  strict: true,
});

authRouter.post("/login", requestValidator(loginSchema), () => {});
authRouter.post("/register", requestValidator(registerSchema), () => {});

export default authRouter;

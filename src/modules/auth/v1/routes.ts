import { Router } from "@/app";

const authRouter = Router({
  strict: true,
});

authRouter.post("/login", () => {});
authRouter.post("/register", () => {});

export default authRouter;

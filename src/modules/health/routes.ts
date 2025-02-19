import { Router } from "@/app";

import healthController from "./controller";

const healthRouter: Router = Router();

healthRouter.get("/", healthController.getHealth);

export default healthRouter;

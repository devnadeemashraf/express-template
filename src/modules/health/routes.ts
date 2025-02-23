import { Router } from "@/app";

import healthController from "./controllers";

const healthRouter: Router = Router();

healthRouter.get("/", healthController.getHealth);

export default healthRouter;

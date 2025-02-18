import swaggerUI from "swagger-ui-express";
import { Router, Request, Response } from "@/app";

import { generateOpenAPIDocument } from "./openAPI-document-generator";

export const openAPIRouter: Router = Router();
const openAPIDocument = generateOpenAPIDocument();

openAPIRouter.get("/swagger.json", (_req: Request, _res: Response) => {
  _res.setHeader("Content-Type", "application/json");
  _res.send(openAPIDocument);
});

openAPIRouter.use("/", swaggerUI.serve, swaggerUI.setup(openAPIDocument));

import cors from "cors";
import express, { Router } from "express";
import type { Express, Request, Response, NextFunction } from "express";

import healthRouter from "@/modules/health/routes";
import { openAPIRouter } from "@/modules/api-docs/openAPI-router";

import config from "@/shared/config";
import errorHandler from "@/shared/middleware/error-handler";

const app: Express = express();

// Middlewares
app.use(
  express.json({
    limit: "1mb",
  })
);
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Routes
app.use(config.api.v1 + "/health", healthRouter);

// Swagger Docs
app.use(openAPIRouter);

// Middlewares
app.use(errorHandler);

// 'express' instance export
export default app;

// 'express' package export
export { Router };

// 'express' package types export
export { Express, Request, Response, NextFunction };

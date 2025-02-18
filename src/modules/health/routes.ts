import { Router } from "@/app";

import healthController from "./controller";

const healthRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Health Check
 *   description: Get Health Status of API
 */
/**
 * @swagger
 * /api/v1/health:
 *   get:
 *     summary: Get Health Status of API
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Get Health was Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */
healthRouter.get("/", healthController.getHealth);

export default healthRouter;

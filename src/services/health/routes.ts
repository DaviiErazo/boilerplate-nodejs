
import { Request, Response } from "express";
import { getHealthStatus } from "./HealthController"

export default [
  {
    path: "/health",
    method: "get",
    handler: async (req: Request, res: Response) => {
      const result = getHealthStatus();
      res.status(200).send(result);    }
  }
];

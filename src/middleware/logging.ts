import { Router } from "express";
const { logRequestResponse } = require("./../utils/middleware/loggingMiddleware");


export const handleLogging = (router: Router) => {
  router.use(logRequestResponse);
};

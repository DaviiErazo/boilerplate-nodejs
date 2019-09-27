const Sentry = require("@sentry/node");
const { SENTRY_URL } = require("./../config/config");


import { Router } from "express";

export const handleRequestSentry = (router: Router) => {
  router.use(Sentry.Handlers.requestHandler());
};

export const handleErrorSentry = (router: Router) => {
  router.use(Sentry.Handlers.errorHandler());
};

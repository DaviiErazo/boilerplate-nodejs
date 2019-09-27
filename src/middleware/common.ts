import { Router } from "express";
import cors from "cors";
import parser from "body-parser";
import compression from "compression";
import helmet from "helmet";


export const handleCors = (router: Router) =>
  router.use(
    cors({
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      origin: "*",
      credentials: true
    })
  );

export const handleBodyRequestParsing = (router: Router) => {
  router.use(parser.urlencoded({ extended: true }));
  router.use(parser.json());
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};

export const handleHelmet = (router: Router) => {
  router.use(helmet());
};

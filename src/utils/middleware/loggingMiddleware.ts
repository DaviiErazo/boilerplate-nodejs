import { Request, Response } from "express";

const Axios = require("axios").default;

// Variables
const { LOGGER_MS_ENDPOINT = "www.google.cl" } = require("./../../config/config");

//const LOGGER_MS_ENDPOINT = process.env.LOGGER_MS_ENDPOINT;

// TODO: improve the logic used to skip a log (reading the header content)
exports.logRequestResponse = (req: Request & any, res: Response, next: any) => {
  /*   console.log(
    req.headers["user-agent"].includes("Health"),
    req.headers["user-agent"]
  ); */

  if (req && !(<String>req.headers["user-agent"]).includes("Health")) {
    const { baseUrl, body, hostname, ip, method, headers } = req;

    Axios.post(`${LOGGER_MS_ENDPOINT}/boilerplate`, {
      headers,
      body,
      base_url: baseUrl,
      host_url: hostname,
      method,
      ip,
      date: +new Date()
    })
      .then(() => console.log("OK"))
      .catch((err: any) => {
        console.error("Error logging REQUEST");
      });
  }

  res.on("finish", () => {
    const { statusCode } = res;

    if (!(<String>req.headers["user-agent"]).includes("Health")) {
      Axios.post(`${LOGGER_MS_ENDPOINT}/boilerplate`, {
        status: statusCode,
        headers: res.getHeaders(),
        data: null,
        date: +new Date()
      })
        .then(() => console.log("OK"))
        .catch((err: any) => console.error("Error logging RESPONSE"));
    }
  });

  // Continue with next middleware
  next();
};

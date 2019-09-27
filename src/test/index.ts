// Import server
var app = require('../server'); // 

// Import libraries
import "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");
let should = chai.should();
const nock = require("nock");

process.env.LOGGER_MS_ENDPOINT = "www.google.cl";

chai.use(chaiHttp);

//Parse the assertion library to get the request function as chai.request is not found
let chaiLib = <any>chai;
let chaiRequestLib = chaiLib.default.request;

chai.use(chaiHttp);

describe("Testing", () => {
  before = () => {

    nock("www.google.cl")
      .post("/boilerplate")
      .reply(200);
  };

  describe("Testing GET METHODS", () => {
    it("shold return 200", () => {
      return chaiRequestLib(app)
        .get("/health")
        .then((res: any) => {
          res.should.have.status(200);
        });
    });

    it("shold return 404", () => {
      return chaiRequestLib(app)
        .get("/heah")
        .then((res: any) => {
          res.should.have.status(404);
        });
    });
  });

  describe("Testing POST METHODS", () => {
    it("should return 200", () => {});
  });
});

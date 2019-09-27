import {
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleHelmet
} from "./common";

import {
  handleRequestSentry,
  handleErrorSentry
} from './sentry'

import {
  handleLogging
} from './logging'

import {
  handleAPIDocs
} from './apiDocs'

export default [
  handleRequestSentry,
  handleHelmet,
  handleCors,
  handleBodyRequestParsing,
  handleCompression,
  handleLogging,
  handleAPIDocs,
  handleErrorSentry
];


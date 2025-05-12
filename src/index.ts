// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export { IrisConnector as default } from './client';

export { type Uploadable, toFile } from './core/uploads';
export { APIPromise } from './core/api-promise';
export { IrisConnector, type ClientOptions } from './client';
export {
  IrisConnectorError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './core/error';

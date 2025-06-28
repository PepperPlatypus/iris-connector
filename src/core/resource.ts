// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { IrisConnector } from '../client';

export abstract class APIResource {
  protected _client: IrisConnector;

  constructor(client: IrisConnector) {
    this._client = client;
  }
}

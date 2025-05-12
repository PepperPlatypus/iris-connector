// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Operators extends APIResource {
  /**
   * Get available operator types
   *
   * @example
   * ```ts
   * const response = await client.api.operators.getTypes();
   * ```
   */
  getTypes(options?: RequestOptions): APIPromise<OperatorGetTypesResponse> {
    return this._client.get('/api/operators/types', options);
  }
}

export interface OperatorGetTypesResponse {
  /**
   * List of available operator types
   */
  types: Array<'browser' | 'computer'>;
}

export declare namespace Operators {
  export { type OperatorGetTypesResponse as OperatorGetTypesResponse };
}

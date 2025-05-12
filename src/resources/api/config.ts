// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Config extends APIResource {
  /**
   * Get current configuration
   *
   * @example
   * ```ts
   * const configResponse = await client.api.config.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<ConfigResponse> {
    return this._client.get('/api/config', options);
  }

  /**
   * Update configuration
   *
   * @example
   * ```ts
   * const configResponse = await client.api.config.update();
   * ```
   */
  update(body: ConfigUpdateParams, options?: RequestOptions): APIPromise<ConfigResponse> {
    return this._client.put('/api/config', { body, ...options });
  }
}

export interface ConfigResponse {
  /**
   * Default Operator Type
   */
  defaultOperator: 'browser' | 'computer';

  /**
   * Language
   */
  language: string;

  /**
   * Loop Interval in Milliseconds
   */
  loopIntervalInMs: number;

  /**
   * Maximum Loop Count
   */
  maxLoopCount: number;

  /**
   * VLM API Key
   */
  vlmApiKey: string;

  /**
   * VLM Base URL
   */
  vlmBaseUrl: string;

  /**
   * VLM Model Name
   */
  vlmModelName: string;

  /**
   * VLM Provider
   */
  vlmProvider: string;
}

export interface ConfigUpdateParams {
  /**
   * Default Operator Type
   */
  defaultOperator?: 'browser' | 'computer';

  /**
   * Language
   */
  language?: string;

  /**
   * Loop Interval in Milliseconds
   */
  loopIntervalInMs?: number;

  /**
   * Maximum Loop Count
   */
  maxLoopCount?: number;

  /**
   * VLM API Key
   */
  vlmApiKey?: string;

  /**
   * VLM Base URL
   */
  vlmBaseUrl?: string;

  /**
   * VLM Model Name
   */
  vlmModelName?: string;

  /**
   * VLM Provider
   */
  vlmProvider?: string;
}

export declare namespace Config {
  export { type ConfigResponse as ConfigResponse, type ConfigUpdateParams as ConfigUpdateParams };
}

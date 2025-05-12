// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rpa extends APIResource {
  /**
   * Starts multiple RPA executions with different parameter values.
   *
   * @example
   * ```ts
   * const response = await client.api.rpa.batchExecute({
   *   parameterSets: ['string', 'string'],
   *   recordingId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
   * });
   * ```
   */
  batchExecute(body: RpaBatchExecuteParams, options?: RequestOptions): APIPromise<RpaBatchExecuteResponse> {
    return this._client.post('/api/rpa/batch-execute', { body, ...options });
  }

  /**
   * Initiates an automated execution of actions captured in a recording.
   *
   * @example
   * ```ts
   * const executionStatus = await client.api.rpa.execute({
   *   recordingId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
   * });
   * ```
   */
  execute(body: RpaExecuteParams, options?: RequestOptions): APIPromise<ExecutionStatus> {
    return this._client.post('/api/rpa/execute', { body, ...options });
  }

  /**
   * Returns a template with all parameterizable fields in a recording.
   *
   * @example
   * ```ts
   * const response = await client.api.rpa.getParameterTemplate(
   *   'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
   * );
   * ```
   */
  getParameterTemplate(
    recordingID: string,
    options?: RequestOptions,
  ): APIPromise<RpaGetParameterTemplateResponse> {
    return this._client.get(path`/api/rpa/${recordingID}/parameter-template`, options);
  }

  /**
   * Returns the current status and progress of an RPA execution.
   *
   * @example
   * ```ts
   * const executionStatus = await client.api.rpa.getStatus(
   *   'rpa_1695872345678',
   * );
   * ```
   */
  getStatus(executionID: string, options?: RequestOptions): APIPromise<ExecutionStatus> {
    return this._client.get(path`/api/rpa/${executionID}/status`, options);
  }

  /**
   * Stops a running RPA execution and releases resources.
   *
   * @example
   * ```ts
   * const executionStatus = await client.api.rpa.stopExecution(
   *   'rpa_1695872345678',
   * );
   * ```
   */
  stopExecution(executionID: string, options?: RequestOptions): APIPromise<ExecutionStatus> {
    return this._client.post(path`/api/rpa/${executionID}/stop`, options);
  }
}

export interface ExecutionStatus {
  /**
   * Current action index being executed
   */
  currentActionIndex: number;

  /**
   * The ID of the RPA execution
   */
  executionId: string;

  /**
   * Operator type being used for execution
   */
  operatorType: 'browser' | 'computer';

  /**
   * The ID of the recording being automated
   */
  recordingId: string;

  /**
   * Timestamp when the execution started
   */
  startedAt: number;

  /**
   * Current status of the execution
   */
  status: 'running' | 'completed' | 'failed' | 'stopped';

  /**
   * Total number of actions to execute
   */
  totalActions: number;

  /**
   * Error message if execution failed
   */
  errorMessage?: string;
}

export interface RpaBatchExecuteResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;

  /**
   * Optional message with additional details
   */
  message?: string;
}

export interface RpaGetParameterTemplateResponse {
  /**
   * Parameter template with parameterizable fields
   */
  parameterTemplate: unknown;

  /**
   * The ID of the recording
   */
  recordingId: string;
}

export interface RpaBatchExecuteParams {
  /**
   * Parameter sets for batch execution
   */
  parameterSets: Array<string>;

  /**
   * The ID of the recording containing caption data
   */
  recordingId: string;

  /**
   * Optional delay between actions in milliseconds
   */
  actionDelay?: number;
}

export interface RpaExecuteParams {
  /**
   * The ID of the recording containing caption data
   */
  recordingId: string;

  /**
   * Optional delay between actions in milliseconds
   */
  actionDelay?: number;

  /**
   * Optional parameter overrides for type actions
   */
  parameterOverrides?: unknown;
}

export declare namespace Rpa {
  export {
    type ExecutionStatus as ExecutionStatus,
    type RpaBatchExecuteResponse as RpaBatchExecuteResponse,
    type RpaGetParameterTemplateResponse as RpaGetParameterTemplateResponse,
    type RpaBatchExecuteParams as RpaBatchExecuteParams,
    type RpaExecuteParams as RpaExecuteParams,
  };
}

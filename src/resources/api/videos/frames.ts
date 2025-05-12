// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Frames extends APIResource {
  /**
   * Returns all frames and their associated captions for a recording to be edited
   *
   * @example
   * ```ts
   * const frames = await client.api.videos.frames.list('id');
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<FrameListResponse> {
    return this._client.get(path`/api/videos/${id}/frames`, options);
  }

  /**
   * Deletes a specific frame from a recording and updates captions accordingly
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.videos.frames.delete(0, { id: 'id' });
   * ```
   */
  delete(
    frameIndex: number,
    params: FrameDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SuccessResponse> {
    const { id } = params;
    return this._client.delete(path`/api/videos/${id}/frames/${frameIndex}`, options);
  }
}

export interface SuccessResponse {
  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export interface FrameListResponse {
  /**
   * Array of caption data objects
   */
  captions: Array<FrameListResponse.Caption>;

  /**
   * Array of base64-encoded frames
   */
  frames: Array<string>;

  /**
   * Whether the operation was successful
   */
  success: boolean;
}

export namespace FrameListResponse {
  export interface Caption {
    /**
     * Conversation object containing the caption text and metadata
     */
    conversation: unknown;

    /**
     * The index of the frame this caption belongs to
     */
    frameIndex: number;

    /**
     * Timestamp when the caption was created
     */
    timestamp: number;
  }
}

export interface FrameDeleteParams {
  /**
   * The ID of the recording
   */
  id: string;
}

export declare namespace Frames {
  export {
    type SuccessResponse as SuccessResponse,
    type FrameListResponse as FrameListResponse,
    type FrameDeleteParams as FrameDeleteParams,
  };
}

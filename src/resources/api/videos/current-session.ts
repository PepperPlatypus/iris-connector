// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class CurrentSession extends APIResource {
  /**
   * Returns the raw frames and captions for the current active session. This
   * endpoint is primarily used for diagnostic purposes or custom video processing.
   * Most clients should use the generated video file instead of raw frames.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.videos.currentSession.getVideoData();
   * ```
   */
  getVideoData(options?: RequestOptions): APIPromise<CurrentSessionGetVideoDataResponse> {
    return this._client.get('/api/videos/current-session/video-data', options);
  }
}

export interface CurrentSessionGetVideoDataResponse {
  /**
   * Whether the request was successful
   */
  success: boolean;

  /**
   * Video data
   */
  videoData: unknown;
}

export declare namespace CurrentSession {
  export { type CurrentSessionGetVideoDataResponse as CurrentSessionGetVideoDataResponse };
}

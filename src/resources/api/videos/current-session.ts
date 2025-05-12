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
  videoData: CurrentSessionGetVideoDataResponse.VideoData;
}

export namespace CurrentSessionGetVideoDataResponse {
  /**
   * Video data
   */
  export interface VideoData {
    /**
     * Array of caption data
     */
    captions: Array<VideoData.Caption>;

    /**
     * Array of base64-encoded frames
     */
    frames: Array<string>;

    /**
     * Optional recording metadata
     */
    metadata?: VideoData.Metadata;
  }

  export namespace VideoData {
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

    /**
     * Optional recording metadata
     */
    export interface Metadata {
      /**
       * Unique identifier for the recording
       */
      id: string;

      /**
       * Timestamp when the recording was created
       */
      createdAt: number;

      /**
       * Duration of the recording in milliseconds
       */
      duration: number;

      /**
       * Path to the recording files
       */
      filePath: string;

      /**
       * Number of frames in the recording
       */
      frameCount: number;

      /**
       * Session ID this recording belongs to
       */
      sessionId: string;

      /**
       * Size of the recording in bytes
       */
      size: number;

      /**
       * Title of the recording
       */
      title: string;

      /**
       * Description of the recording
       */
      description?: string;

      /**
       * Whether the recording has a video
       */
      hasVideo?: boolean;

      /**
       * Operator type used for the session
       */
      operatorType?: 'browser' | 'computer';

      /**
       * Path to the thumbnail image
       */
      thumbnailPath?: string;

      /**
       * Format of the generated video
       */
      videoFormat?: string;

      /**
       * Timestamp when video generation completed
       */
      videoGenerationCompletedAt?: number;

      /**
       * Error message if video generation failed
       */
      videoGenerationError?: string;

      /**
       * Timestamp when video generation started
       */
      videoGenerationStartedAt?: number;

      /**
       * Status of video generation
       */
      videoGenerationStatus?: 'pending' | 'in_progress' | 'completed' | 'failed';

      /**
       * Path to the generated video file
       */
      videoPath?: string;

      /**
       * Size of the generated video in bytes
       */
      videoSize?: number;
    }
  }
}

export declare namespace CurrentSession {
  export { type CurrentSessionGetVideoDataResponse as CurrentSessionGetVideoDataResponse };
}

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CurrentSessionAPI from './current-session';
import { CurrentSession, CurrentSessionGetVideoDataResponse } from './current-session';
import * as FramesAPI from './frames';
import { FrameDeleteParams, FrameListResponse, Frames, SuccessResponse } from './frames';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Videos extends APIResource {
  currentSession: CurrentSessionAPI.CurrentSession = new CurrentSessionAPI.CurrentSession(this._client);
  frames: FramesAPI.Frames = new FramesAPI.Frames(this._client);

  /**
   * Returns detailed metadata about a specific recording
   *
   * @example
   * ```ts
   * const video = await client.api.videos.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VideoRetrieveResponse> {
    return this._client.get(path`/api/videos/${id}`, options);
  }

  /**
   * Returns a list of all video recordings available in the system
   *
   * @example
   * ```ts
   * const videos = await client.api.videos.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VideoListResponse> {
    return this._client.get('/api/videos', options);
  }

  /**
   * Permanently deletes a recording and all associated files. This operation cannot
   * be undone. It removes all frames, captions, metadata, and the generated video
   * file.
   *
   * @example
   * ```ts
   * const video = await client.api.videos.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VideoDeleteResponse> {
    return this._client.delete(path`/api/videos/${id}`, options);
  }

  /**
   * Downloads a recording as a ZIP archive containing all frames, captions, and
   * metadata. This is useful for backup purposes or offline processing. For normal
   * video playback, use the video endpoint instead.
   *
   * @example
   * ```ts
   * const response = await client.api.videos.download('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/videos/${id}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/zip' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Execute RPA steps through reAct agent
   *
   * @example
   * ```ts
   * await client.api.videos.execute('id');
   * ```
   */
  execute(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/video/execute/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Creates a video file from the frames of a recording with customizable options.
   * This endpoint allows you to specify frame rate, caption settings, output format,
   * and quality level. By default, videos play at 0.2 frames per second (5 seconds
   * per frame) to allow time to read the captions. Videos are generated
   * asynchronously, and you can check the status using the video-status endpoint.
   * Note that videos are also generated automatically when a recording is created,
   * so this endpoint is mostly useful for regenerating with different settings. The
   * generated video will have the correct duration with each screenshot displayed
   * for the specified amount of time.
   *
   * @example
   * ```ts
   * const response = await client.api.videos.generateVideo(
   *   'id',
   * );
   * ```
   */
  generateVideo(
    id: string,
    body: VideoGenerateVideoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<VideoGenerateVideoResponse> {
    return this._client.post(path`/api/videos/${id}/generate-video`, { body, ...options });
  }

  /**
   * Get analysis results for a video
   *
   * @example
   * ```ts
   * const response = await client.api.videos.getAnalysis('id');
   * ```
   */
  getAnalysis(id: string, options?: RequestOptions): APIPromise<VideoGetAnalysisResponse> {
    return this._client.get(path`/api/video/analysis/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * await client.api.videos.getOriginal('filename');
   * ```
   */
  getOriginal(filename: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/video/original/${filename}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * @example
   * ```ts
   * await client.api.videos.getProcessed('filename');
   * ```
   */
  getProcessed(filename: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/api/video/processed/${filename}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the thumbnail image for a recording as a PNG file. This is typically the
   * first frame of the recording.
   *
   * @example
   * ```ts
   * const response = await client.api.videos.getThumbnail('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  getThumbnail(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/api/videos/${id}/thumbnail`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/png' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Returns the raw frames and captions for a specific recording. This endpoint is
   * primarily used for replaying recordings in the UI.
   *
   * @example
   * ```ts
   * const response = await client.api.videos.getVideoData('id');
   * ```
   */
  getVideoData(id: string, options?: RequestOptions): APIPromise<VideoGetVideoDataResponse> {
    return this._client.get(path`/api/videos/${id}/video-data`, options);
  }

  /**
   * Returns the current status of video generation for a recording. This endpoint
   * provides detailed information about the video generation process, including
   * whether it is pending, in progress, completed, or failed. Additional information
   * is provided based on the status, such as start time, completion time, file
   * format, size, and error messages if applicable.
   *
   * @example
   * ```ts
   * const response = await client.api.videos.getVideoStatus(
   *   'id',
   * );
   * ```
   */
  getVideoStatus(id: string, options?: RequestOptions): APIPromise<VideoGetVideoStatusResponse> {
    return this._client.get(path`/api/videos/${id}/video-status`, options);
  }

  /**
   * Regenerates the video file after frames or captions have been edited
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.videos.regenerateVideo('id');
   * ```
   */
  regenerateVideo(id: string, options?: RequestOptions): APIPromise<FramesAPI.SuccessResponse> {
    return this._client.post(path`/api/videos/${id}/regenerate`, options);
  }

  /**
   * Saves the current active session as a video recording. This endpoint captures
   * all screenshots collected during the session, stores them on disk, and initiates
   * automatic video generation in the background. The video generation process
   * happens asynchronously and can be monitored via the video-status endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.videos.saveCurrentSession();
   * ```
   */
  saveCurrentSession(options?: RequestOptions): APIPromise<VideoSaveCurrentSessionResponse> {
    return this._client.post('/api/videos/save-current-session', options);
  }

  /**
   * Streams the generated video file for a recording. This endpoint can be used
   * directly in video players, such as in an HTML5 video tag. By default, videos
   * play at 0.2 frames per second (5 seconds per frame) to allow time to read the
   * captions. If the video has not been generated yet, it will attempt to generate
   * it on-demand. If generation is already in progress, it returns a status update
   * instead of the video. The endpoint supports both streaming (default) and
   * download modes. The video duration will be correctly calculated based on the
   * frame rate and number of screenshots.
   *
   * @example
   * ```ts
   * const response = await client.api.videos.streamVideo('id');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  streamVideo(
    id: string,
    query: VideoStreamVideoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/api/videos/${id}/video`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'video/mp4' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Updates the caption text for a specific frame
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.api.videos.updateCaption(0, { id: 'id' });
   * ```
   */
  updateCaption(
    frameIndex: number,
    params: VideoUpdateCaptionParams,
    options?: RequestOptions,
  ): APIPromise<FramesAPI.SuccessResponse> {
    const { id, ...body } = params;
    return this._client.put(path`/api/videos/${id}/captions/${frameIndex}`, { body, ...options });
  }

  /**
   * Upload a video for RPA analysis
   *
   * @example
   * ```ts
   * const response = await client.api.videos.upload({
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  upload(body: VideoUploadParams, options?: RequestOptions): APIPromise<VideoUploadResponse> {
    return this._client.post(
      '/api/video/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface VideoRetrieveResponse {
  /**
   * Recording metadata
   */
  recording: VideoRetrieveResponse.Recording;

  /**
   * Whether the request was successful
   */
  success: boolean;
}

export namespace VideoRetrieveResponse {
  /**
   * Recording metadata
   */
  export interface Recording {
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

    [k: string]: unknown;
  }
}

export interface VideoListResponse {
  /**
   * List of recordings
   */
  recordings: Array<Array<unknown>>;
}

export interface VideoDeleteResponse {
  /**
   * Whether the delete operation was successful
   */
  success: boolean;
}

export interface VideoGenerateVideoResponse {
  /**
   * Recording metadata after video generation
   */
  recording: VideoGenerateVideoResponse.Recording;

  /**
   * Whether the video generation was successful
   */
  success: boolean;

  /**
   * Path to the generated video file
   */
  videoPath: string;
}

export namespace VideoGenerateVideoResponse {
  /**
   * Recording metadata after video generation
   */
  export interface Recording {
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

    [k: string]: unknown;
  }
}

export interface VideoGetAnalysisResponse {
  /**
   * Unique identifier for the analysis
   */
  analysisId: string;

  /**
   * URL to access the original video
   */
  originalVideoUrl: string;

  /**
   * URL to access the processed video
   */
  processedVideoUrl: string;

  /**
   * Generated RPA steps for browser automation
   */
  rpaSteps: string;
}

export interface VideoGetVideoDataResponse {
  /**
   * Replay video data
   */
  replayData: VideoGetVideoDataResponse.ReplayData;

  /**
   * Whether the request was successful
   */
  success: boolean;
}

export namespace VideoGetVideoDataResponse {
  /**
   * Replay video data
   */
  export interface ReplayData {
    /**
     * Array of caption data
     */
    captions: Array<ReplayData.Caption>;

    /**
     * Array of base64-encoded frames
     */
    frames: Array<string>;

    /**
     * Optional recording metadata
     */
    metadata?: ReplayData.Metadata;
  }

  export namespace ReplayData {
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

export interface VideoGetVideoStatusResponse {
  /**
   * Whether the recording has a video file
   */
  hasVideo: boolean;

  /**
   * Human-readable status message
   */
  message: string;

  /**
   * ID of the recording
   */
  recordingId: string;

  /**
   * Status of video generation
   */
  status: 'pending' | 'in_progress' | 'completed' | 'failed';

  /**
   * Timestamp when video generation completed (if completed)
   */
  completedAt?: number;

  /**
   * Elapsed time in seconds since generation started (if in progress)
   */
  elapsedSeconds?: number;

  /**
   * Error message (if failed)
   */
  error?: string;

  /**
   * Video format (if completed)
   */
  format?: string;

  /**
   * Video size in MB (if completed)
   */
  sizeMB?: number;

  /**
   * Timestamp when video generation started (if in progress or completed)
   */
  startedAt?: number;
}

export interface VideoSaveCurrentSessionResponse {
  /**
   * Recording metadata
   */
  recording: VideoSaveCurrentSessionResponse.Recording;

  /**
   * Whether the request was successful
   */
  success: boolean;
}

export namespace VideoSaveCurrentSessionResponse {
  /**
   * Recording metadata
   */
  export interface Recording {
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

    [k: string]: unknown;
  }
}

export interface VideoUploadResponse {
  /**
   * Unique identifier for the analysis
   */
  analysisId: string;

  /**
   * Status message
   */
  message: string;

  /**
   * Original uploaded video filename
   */
  originalVideo: string;

  /**
   * Processed video filename with idle sections removed
   */
  processedVideo: string;
}

export interface VideoGenerateVideoParams {
  /**
   * Whether to include captions in the video
   */
  captionsEnabled?: boolean;

  /**
   * Video format to generate
   */
  format?: 'mp4' | 'webm' | 'gif';

  /**
   * Frames per second for the generated video (0.2 = 5 seconds per frame)
   */
  fps?: number;

  /**
   * Video quality level
   */
  quality?: 'low' | 'medium' | 'high';
}

export interface VideoStreamVideoParams {
  /**
   * Set to "true" to download the video instead of streaming it
   */
  download?: boolean;
}

export interface VideoUpdateCaptionParams {
  /**
   * Path param: The ID of the recording
   */
  id: string;

  /**
   * Body param: Full caption object with predictionParsed and other data
   */
  caption?: unknown;

  /**
   * Body param: New caption text (for backward compatibility)
   */
  text?: string;
}

export interface VideoUploadParams {
  /**
   * Video file to analyze (MP4, WebM, or AVI)
   */
  file: Uploadable;
}

Videos.CurrentSession = CurrentSession;
Videos.Frames = Frames;

export declare namespace Videos {
  export {
    type VideoRetrieveResponse as VideoRetrieveResponse,
    type VideoListResponse as VideoListResponse,
    type VideoDeleteResponse as VideoDeleteResponse,
    type VideoGenerateVideoResponse as VideoGenerateVideoResponse,
    type VideoGetAnalysisResponse as VideoGetAnalysisResponse,
    type VideoGetVideoDataResponse as VideoGetVideoDataResponse,
    type VideoGetVideoStatusResponse as VideoGetVideoStatusResponse,
    type VideoSaveCurrentSessionResponse as VideoSaveCurrentSessionResponse,
    type VideoUploadResponse as VideoUploadResponse,
    type VideoGenerateVideoParams as VideoGenerateVideoParams,
    type VideoStreamVideoParams as VideoStreamVideoParams,
    type VideoUpdateCaptionParams as VideoUpdateCaptionParams,
    type VideoUploadParams as VideoUploadParams,
  };

  export {
    CurrentSession as CurrentSession,
    type CurrentSessionGetVideoDataResponse as CurrentSessionGetVideoDataResponse,
  };

  export {
    Frames as Frames,
    type SuccessResponse as SuccessResponse,
    type FrameListResponse as FrameListResponse,
    type FrameDeleteParams as FrameDeleteParams,
  };
}

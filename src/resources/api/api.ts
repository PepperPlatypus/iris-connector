// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { Config, ConfigResponse, ConfigUpdateParams } from './config';
import * as OperatorsAPI from './operators';
import { OperatorGetTypesResponse, Operators } from './operators';
import * as RpaAPI from './rpa';
import {
  ExecutionStatus,
  Rpa,
  RpaBatchExecuteParams,
  RpaBatchExecuteResponse,
  RpaExecuteParams,
  RpaGetParameterTemplateResponse,
} from './rpa';
import * as VideosAPI from './videos/videos';
import {
  VideoDeleteResponse,
  VideoGenerateVideoParams,
  VideoGenerateVideoResponse,
  VideoGetAnalysisResponse,
  VideoGetVideoDataResponse,
  VideoGetVideoStatusResponse,
  VideoRetrieveResponse,
  VideoSaveCurrentSessionResponse,
  VideoStreamVideoParams,
  VideoUpdateCaptionParams,
  VideoUploadParams,
  VideoUploadResponse,
  Videos,
} from './videos/videos';

export class API extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);
  operators: OperatorsAPI.Operators = new OperatorsAPI.Operators(this._client);
  rpa: RpaAPI.Rpa = new RpaAPI.Rpa(this._client);
  videos: VideosAPI.Videos = new VideosAPI.Videos(this._client);
}

API.Config = Config;
API.Operators = Operators;
API.Rpa = Rpa;
API.Videos = Videos;

export declare namespace API {
  export {
    Config as Config,
    type ConfigResponse as ConfigResponse,
    type ConfigUpdateParams as ConfigUpdateParams,
  };

  export { Operators as Operators, type OperatorGetTypesResponse as OperatorGetTypesResponse };

  export {
    Rpa as Rpa,
    type ExecutionStatus as ExecutionStatus,
    type RpaBatchExecuteResponse as RpaBatchExecuteResponse,
    type RpaGetParameterTemplateResponse as RpaGetParameterTemplateResponse,
    type RpaBatchExecuteParams as RpaBatchExecuteParams,
    type RpaExecuteParams as RpaExecuteParams,
  };

  export {
    Videos as Videos,
    type VideoRetrieveResponse as VideoRetrieveResponse,
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
}

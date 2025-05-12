# API

## Config

Types:

- <code><a href="./src/resources/api/config.ts">ConfigResponse</a></code>

Methods:

- <code title="get /api/config">client.api.config.<a href="./src/resources/api/config.ts">retrieve</a>() -> ConfigResponse</code>
- <code title="put /api/config">client.api.config.<a href="./src/resources/api/config.ts">update</a>({ ...params }) -> ConfigResponse</code>

## Operators

Types:

- <code><a href="./src/resources/api/operators.ts">OperatorGetTypesResponse</a></code>

Methods:

- <code title="get /api/operators/types">client.api.operators.<a href="./src/resources/api/operators.ts">getTypes</a>() -> OperatorGetTypesResponse</code>

## Rpa

Types:

- <code><a href="./src/resources/api/rpa.ts">ExecutionStatus</a></code>
- <code><a href="./src/resources/api/rpa.ts">RpaBatchExecuteResponse</a></code>
- <code><a href="./src/resources/api/rpa.ts">RpaGetParameterTemplateResponse</a></code>

Methods:

- <code title="post /api/rpa/batch-execute">client.api.rpa.<a href="./src/resources/api/rpa.ts">batchExecute</a>({ ...params }) -> RpaBatchExecuteResponse</code>
- <code title="post /api/rpa/execute">client.api.rpa.<a href="./src/resources/api/rpa.ts">execute</a>({ ...params }) -> ExecutionStatus</code>
- <code title="get /api/rpa/{recordingId}/parameter-template">client.api.rpa.<a href="./src/resources/api/rpa.ts">getParameterTemplate</a>(recordingID) -> RpaGetParameterTemplateResponse</code>
- <code title="get /api/rpa/{executionId}/status">client.api.rpa.<a href="./src/resources/api/rpa.ts">getStatus</a>(executionID) -> ExecutionStatus</code>
- <code title="post /api/rpa/{executionId}/stop">client.api.rpa.<a href="./src/resources/api/rpa.ts">stopExecution</a>(executionID) -> ExecutionStatus</code>

## Videos

Types:

- <code><a href="./src/resources/api/videos/videos.ts">VideoRetrieveResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoListResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoDeleteResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoGenerateVideoResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoGetAnalysisResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoGetVideoDataResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoGetVideoStatusResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoSaveCurrentSessionResponse</a></code>
- <code><a href="./src/resources/api/videos/videos.ts">VideoUploadResponse</a></code>

Methods:

- <code title="get /api/videos/{id}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">retrieve</a>(id) -> VideoRetrieveResponse</code>
- <code title="get /api/videos">client.api.videos.<a href="./src/resources/api/videos/videos.ts">list</a>() -> VideoListResponse</code>
- <code title="delete /api/videos/{id}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">delete</a>(id) -> VideoDeleteResponse</code>
- <code title="get /api/videos/{id}/download">client.api.videos.<a href="./src/resources/api/videos/videos.ts">download</a>(id) -> Response</code>
- <code title="post /api/video/execute/{id}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">execute</a>(id) -> void</code>
- <code title="post /api/videos/{id}/generate-video">client.api.videos.<a href="./src/resources/api/videos/videos.ts">generateVideo</a>(id, { ...params }) -> VideoGenerateVideoResponse</code>
- <code title="get /api/video/analysis/{id}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">getAnalysis</a>(id) -> VideoGetAnalysisResponse</code>
- <code title="get /api/video/original/{filename}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">getOriginal</a>(filename) -> void</code>
- <code title="get /api/video/processed/{filename}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">getProcessed</a>(filename) -> void</code>
- <code title="get /api/videos/{id}/thumbnail">client.api.videos.<a href="./src/resources/api/videos/videos.ts">getThumbnail</a>(id) -> Response</code>
- <code title="get /api/videos/{id}/video-data">client.api.videos.<a href="./src/resources/api/videos/videos.ts">getVideoData</a>(id) -> VideoGetVideoDataResponse</code>
- <code title="get /api/videos/{id}/video-status">client.api.videos.<a href="./src/resources/api/videos/videos.ts">getVideoStatus</a>(id) -> VideoGetVideoStatusResponse</code>
- <code title="post /api/videos/{id}/regenerate">client.api.videos.<a href="./src/resources/api/videos/videos.ts">regenerateVideo</a>(id) -> SuccessResponse</code>
- <code title="post /api/videos/save-current-session">client.api.videos.<a href="./src/resources/api/videos/videos.ts">saveCurrentSession</a>() -> VideoSaveCurrentSessionResponse</code>
- <code title="get /api/videos/{id}/video">client.api.videos.<a href="./src/resources/api/videos/videos.ts">streamVideo</a>(id, { ...params }) -> Response</code>
- <code title="put /api/videos/{id}/captions/{frameIndex}">client.api.videos.<a href="./src/resources/api/videos/videos.ts">updateCaption</a>(frameIndex, { ...params }) -> SuccessResponse</code>
- <code title="post /api/video/upload">client.api.videos.<a href="./src/resources/api/videos/videos.ts">upload</a>({ ...params }) -> VideoUploadResponse</code>

### CurrentSession

Types:

- <code><a href="./src/resources/api/videos/current-session.ts">CurrentSessionGetVideoDataResponse</a></code>

Methods:

- <code title="get /api/videos/current-session/video-data">client.api.videos.currentSession.<a href="./src/resources/api/videos/current-session.ts">getVideoData</a>() -> CurrentSessionGetVideoDataResponse</code>

### Frames

Types:

- <code><a href="./src/resources/api/videos/frames.ts">SuccessResponse</a></code>
- <code><a href="./src/resources/api/videos/frames.ts">FrameListResponse</a></code>

Methods:

- <code title="get /api/videos/{id}/frames">client.api.videos.frames.<a href="./src/resources/api/videos/frames.ts">list</a>(id) -> FrameListResponse</code>
- <code title="delete /api/videos/{id}/frames/{frameIndex}">client.api.videos.frames.<a href="./src/resources/api/videos/frames.ts">delete</a>(frameIndex, { ...params }) -> SuccessResponse</code>

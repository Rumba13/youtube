import { makeAutoObservable } from 'mobx';
import { VideoTagType } from '../../../shared/api/types/video-tag-type';
import { VideoService } from '../../../shared/api/video-service';

export type VideoTagIdType = string;

class VideoTagsState {
 private videoService: VideoService;

 public isLoading = false;
 public isError = false;
 public setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
 public setIsError = (isError: boolean) => (this.isError = isError);

 public videoTags: VideoTagType[] = [];
 public activeTag: VideoTagIdType | null = null;

 public setVideoTags = (videoTags: VideoTagType[]) => (this.videoTags = videoTags);
 public setActiveTag = (activeTag: VideoTagIdType | null) => (this.activeTag = activeTag);

 constructor(videoService: VideoService) {
  makeAutoObservable(this);
  this.videoService = videoService;
 }

 public loadVideoTags = async () => {
  try {
   this.setIsLoading(true);
   this.setVideoTags(await this.videoService.loadVideoTags());
  } catch (err) {
   console.log(err);
   this.setIsError(true);
  } finally {
   this.setIsLoading(false);
  }
 };
}

export const videoTagsState = new VideoTagsState(new VideoService());

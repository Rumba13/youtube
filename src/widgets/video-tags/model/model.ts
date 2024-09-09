import { makeAutoObservable } from 'mobx';
import { VideoTag } from '../../../shared/api/types/video-tag';
import { VideoService } from '../../../shared/api/video-service';

export type VideoTagIdType = string;

class VideoTagsStore {
  private videoService: VideoService;

  public isLoading = false;
  public isError = false;
  public setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
  public setIsError = (isError: boolean) => (this.isError = isError);

  public videoTags: VideoTag[] = [];
  public activeTag: VideoTagIdType | null = null;

  public setVideoTags = (videoTags: VideoTag[]) => (this.videoTags = videoTags);
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

export const videoTagsStore = new VideoTagsStore(new VideoService());

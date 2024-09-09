import { makeAutoObservable } from 'mobx';
import { Video } from '../../../shared/api/types/video';
import { VideoService } from '../../../shared/api/video-service';

class VideoStore {
  private videoService: VideoService;
  public videos: Video[] = [];

  public setVideos = (videos: Video[]) => (this.videos = videos);

  constructor(videoService: VideoService) {
    makeAutoObservable(this);
    this.videoService = videoService;
  }

  public loadVideos = async (userJwt: string | null) => {
    this.setVideos(await this.videoService.loadRecommendedVideos(userJwt));
  };
}

export const videoStore = new VideoStore(new VideoService());

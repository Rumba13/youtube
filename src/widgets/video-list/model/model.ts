import { makeAutoObservable } from 'mobx';
import { VideoType } from '../../../shared/api/types/video-type';
import { VideoService } from '../../../shared/api/video-service';

class VideoState {
 private videoService: VideoService;
 public videos: VideoType[] = [];

 public setVideos = (videos: VideoType[]) => (this.videos = videos);

 constructor(videoService: VideoService) {
  makeAutoObservable(this);
  this.videoService = videoService;
 }

 public loadVideos = async (userJwt: string | null) => {
  this.setVideos(await this.videoService.loadRecommendedVideos(userJwt));
 };
}

export const videoState = new VideoState(new VideoService());

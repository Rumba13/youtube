import { VideoType } from './types/video-type';
import { VideoTagType } from './types/video-tag-type';
import { axiosServerConnection } from './axios-server-connection';

export class VideoService {
  public async loadRecommendedVideos(): Promise<VideoType[]> {
    try {
      const videos:VideoType[] = (await axiosServerConnection.get('/recommended-videos')).data;
      videos.map(video => video.releaseDate = new Date(video.releaseDate));
      return videos;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public async loadVideoTags(): Promise<VideoTagType[]> {
    try {
      return (await axiosServerConnection.get('/video-tags')).data
    }
    catch (err) {
      console.log(err);
      return [];
    }
  }
}

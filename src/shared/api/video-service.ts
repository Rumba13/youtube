import { VideoType } from './types/video-type';
import { VideoTagType } from './types/video-tag-type';
import { axiosServerConnection } from './axios-server-connection';
import Cookies from 'universal-cookie';

export class VideoService {
  public async loadRecommendedVideos(): Promise<VideoType[]> {
    const cookies = new Cookies();

    try {
      const videos: VideoType[] = (
        await axiosServerConnection.get('/recommended-videos', {
          headers: {
            Authorization: cookies.get('UserJwt') || null,
          },
        })
      ).data;

      videos.map(video => (video.releaseDate = new Date(video.releaseDate)));
      return videos;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public async loadVideoTags(): Promise<VideoTagType[]> {
    try {
      return (await axiosServerConnection.get('/video-tags')).data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

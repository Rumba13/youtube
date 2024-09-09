import { Video } from './types/video';
import { VideoTag } from './types/video-tag';
import { serverConnection } from './server-connection';

export class VideoService {
  public async loadRecommendedVideos(userJwt: string | null): Promise<Video[]> {
    try {
      const videos: Video[] = (
        await serverConnection.get('/recommended-videos', {
          headers: {
            Authorization: userJwt,
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

  public async loadVideoTags(): Promise<VideoTag[]> {
    try {
      return (await serverConnection.get('/video-tags')).data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

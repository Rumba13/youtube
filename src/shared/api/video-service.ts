import { VideoType } from './types/video-type';
import { VideoTagType } from './types/video-tag-type';
import { serverConnection } from './server-connection';

export class VideoService {
 public async loadRecommendedVideos(userJwt: string | null): Promise<VideoType[]> {
  try {
   const videos: VideoType[] = (
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

 public async loadVideoTags(): Promise<VideoTagType[]> {
  try {
   return (await serverConnection.get('/video-tags')).data;
  } catch (err) {
   console.log(err);
   return [];
  }
 }
}

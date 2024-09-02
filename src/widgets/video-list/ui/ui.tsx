import './styles.scss';
import { useEffect } from 'react';
import { videoStore } from '../model/model';
import { observer } from 'mobx-react';
import { VideoCard } from '../../../entities/video-card';
import { VideoActionsModalSlotType } from '../../video-actions-modal';
import { userStore } from '../../../entities/user';
import { VideoTags } from '../../video-tags';

type PropsType = {
 VideoActionsModalSlot: VideoActionsModalSlotType;
};

export const VideoList = observer(({ VideoActionsModalSlot }: PropsType) => {
 const { videos, loadVideos } = videoStore;
 const { getUserJwt, user } = userStore;
 const userJwt = getUserJwt();

 useEffect(() => {
  loadVideos(userJwt);
 }, [user]);

 return (
  <div className="video-list">
   {videos.map(video => (
    <VideoCard VideoActionsModalSlot={VideoActionsModalSlot} video={video} key={video.id} />
   ))}
  </div>
 );
});

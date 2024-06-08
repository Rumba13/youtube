import './styles.scss';
import { VideoTags } from '../../../widgets/video-tags';
import { VideoList } from '../../../widgets/video-list';
import { VideoActionsList } from '../../../widgets/video-actions-modal';

export function HomePage() {
 return (
  <div className="home-page">
   <VideoTags />
   <VideoList VideoActionsModalSlot={VideoActionsList} />
  </div>
 );
}

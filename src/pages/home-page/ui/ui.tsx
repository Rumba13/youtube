import './styles.scss';
import { VideoTags } from '../../../widgets/video-tags';
import { VideoList } from '../../../widgets/video-list';
import { VideoActionsList } from '../../../widgets/video-actions-modal';
import { asideStore } from '../../../widgets/aside';
import { observer } from 'mobx-react';

export const HomePage = observer(() => {
  return (
    <div className="home-page" style={{ marginLeft: asideStore.isMinified ? '0px' : '240px' }}>
      <VideoTags />
      <VideoList VideoActionsModalSlot={VideoActionsList} />
    </div>
  );
});

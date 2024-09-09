import './styles.scss';
import { useEffect } from 'react';
import { overlayStore } from '../../../app/overlay';
import { videoTagsStore } from '../model/model';
import { observer } from 'mobx-react';
import { VideoTagsItem } from './video-tags-item';
import { useTranslation } from 'react-i18next';

export const VideoTags = observer(() => {
  const { activeTag, videoTags, setActiveTag, loadVideoTags, isLoading } = videoTagsStore;
  const { t } = useTranslation();
  useEffect(() => {
    loadVideoTags();
  }, []);

  function setActiveTagAndToggleOverlay(videoTagId: string | null) {
    setActiveTag(videoTagId);
    overlayStore.setIsOverlayOpened(true);

    setTimeout(() => {
      //TODO FUTURE Replace setTimeout with video loading Store
      overlayStore.setIsOverlayOpened(false);
    }, 1000);
  }

  if (isLoading) {
    return <></>;
  }

  return (
    <div className="video-tags-wrapper">
      <ul className="video-tags" aria-label={t('Video Tags')}>
        <VideoTagsItem isActive={activeTag === null} onClick={() => setActiveTagAndToggleOverlay(null)} key={0}>
          Все
        </VideoTagsItem>

        {videoTags.map(videoTag => (
          <VideoTagsItem
            isActive={activeTag === videoTag.id}
            onClick={() => setActiveTagAndToggleOverlay(videoTag.id)}
            key={videoTag.id}>
            {videoTag.title}
          </VideoTagsItem>
        ))}
      </ul>
    </div>
  );
});

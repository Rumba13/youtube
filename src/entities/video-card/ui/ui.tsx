import './styles.scss';
import { lazy, Suspense } from 'react';
import { Video } from '../../../shared/api/types/video';
import { useTranslation } from 'react-i18next';
import { formatReleasedDate } from './format-released-date';
import { formatViews } from './format-views';
import { DotsButton } from '../../../shared/ui/dots-menu-icon';
import { useModal } from '../../../shared/lib/use-modal';
import { VideoActionsModalSlotType } from '../../../widgets/video-actions-modal';
const VideoPreview = lazy(() => import('./video-preview').then(({ VideoPreview }) => ({ default: VideoPreview })));
import NoPreviewImage from '../../../assets/images/no-img.webp';

type PropsType = {
  video: Video;
  VideoActionsModalSlot: VideoActionsModalSlotType;
};

export function VideoCard({ video, VideoActionsModalSlot }: PropsType) {
  const { t } = useTranslation();
  const { isModalOpened, toggleModal, stopPropagationInModal } = useModal(false);

  return (
    <div className="video">
      <Suspense fallback={<img src={NoPreviewImage} alt="No preview" />}>
        <VideoPreview preview={video.preview} />
      </Suspense>
      <img className="video__channel-icon" src={video.channelIcon} alt={t('Video Preview')} width={26} height={26} />
      <span className="video__title">{video.title}</span>
      <DotsButton
        onClick={toggleModal}
        onModalClick={stopPropagationInModal}
        ModalSlot={VideoActionsModalSlot}
        isModalOpened={isModalOpened}
        isOpened={isModalOpened}
      />
      <span className="video__channel-name">{video.channelName}</span>
      <span className="video__views">{formatViews(video.views, t)}</span>
      <span className="video__ago">{formatReleasedDate(video.releaseDate, t)}</span>
    </div>
  );
}

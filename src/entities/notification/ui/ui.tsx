import './styles.scss';
import { Notification } from '../../../shared/api/types/notification';
import { DotsButton } from '../../../shared/ui/dots-menu-icon';
import { Trans, useTranslation } from 'react-i18next';
import { FormatNotificationTitle } from './format-notification-title';
import { useModal } from '../../../shared/lib/use-modal';
import React from 'react';
import { NotificationsActionsModalSlotType } from '../../../widgets/notifications-actions-modal';

export type PropsType = {
  notification: Notification;
  ModalSlot: NotificationsActionsModalSlotType; //OLD was NotificationsActionsModalSlotType
};

export function NotificationCard({ notification, ModalSlot }: PropsType) {
  const { title, previewImage, icon, releasedAgo } = notification; //TODO FUTURE refactor all when add Store
  const { t, i18n } = useTranslation();
  const releasedHoursAgo = 6;
  const channelName = 'Nostoro';
  const videoType = 'stream';
  const videoName = 'Что у тебя за дурацкое имя насос?';

  const { isModalOpened, toggleModal, stopPropagationInModal } = useModal(false, {
    parentModalSelector: '.notifications',
  });

  if (!notification) {
    return <div>Loading...</div>;
  }

  return (
    <div className="notification">
      <img className="notification__image" src={icon} alt={t('Notification Image')} />
      <h2 className="notification__title">{FormatNotificationTitle(channelName, videoName, videoType, t)}</h2>
      <img className="notification__preview-image" src={previewImage} alt={t('Preview Image')} />
      <span className="notification__release-ago">{`${t('keyHour', { count: releasedHoursAgo })} ${t('Ago')}`}</span>
      <div className="notification__new-mark"></div>
      <div className="button-wrapper">
        <DotsButton isOpened={isModalOpened} onClick={toggleModal} />
        <ModalSlot isOpened={isModalOpened} onClick={stopPropagationInModal} />
      </div>
    </div>
  );
}

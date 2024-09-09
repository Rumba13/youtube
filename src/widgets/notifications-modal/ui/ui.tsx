import './styles.scss';
import { FC, MouseEventHandler, useEffect } from 'react';
import { NotificationCard } from '../../../entities/notification';
import { notificationsStore } from '../../../entities/notification';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react';
import { SettingsButton } from '../../header';
import { NotificationsActionsModalSlotType } from '../../notifications-actions-modal';
import { userStore } from '../../../entities/user';
import clsx from 'clsx';

export type NotificationModalSlotType = FC<PropsType>;

type PropsType = {
  isOpened: boolean;
  onClick: MouseEventHandler;
  NotificationsActionsModalSlot: NotificationsActionsModalSlotType;
};

export const NotificationsModal = observer(({ isOpened, onClick, NotificationsActionsModalSlot }: PropsType) => {
  const { t } = useTranslation();
  const { getUserJwt } = userStore;
  const userJwt = getUserJwt();

  useEffect(() => {
    notificationsStore.loadNotifications(userJwt);
  }, [userJwt]);

  if (notificationsStore.isLoading) {
    return <></>;
  }

  return (
    <div className={clsx('notifications', isOpened && 'opened')} onClick={onClick}>
      <div className="notifications-header">
        <span className="header__title">{t('Notifications')}</span>
        <SettingsButton />
      </div>
      <div className="notifications-list">
        {notificationsStore.notifications.map(notification => (
          <NotificationCard
            notification={notification}
            ModalSlot={NotificationsActionsModalSlot}
            key={notification.id}
          />
        ))}
      </div>
    </div>
  );
});

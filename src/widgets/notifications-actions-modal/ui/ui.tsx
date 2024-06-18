import './styles.scss';
import { DisableNotificationsButton } from '../../../features/notification-group/disable-notifications';
import { RemoveNotificationButton } from '../../../features/notification-group/remove-notification';
import { FC, MouseEventHandler } from 'react';
import { useTranslation } from 'react-i18next';

export type NotificationsActionsModalSlotType = FC<PropsType & { className?: string }>;

type PropsType = {
 isOpened: boolean;
 onClick: MouseEventHandler;
};

export function NotificationsActionsModal({ isOpened, onClick }: PropsType) { //TODO change naming from RemoveNotificationButton to DisableNotificationButton
 const items: JSX.Element[] = [<RemoveNotificationButton key={1} />, <DisableNotificationsButton key={2} />];
 const { t } = useTranslation();

 return (
  <ul className={`list notifications-actions-list${isOpened ? ' opened' : ''}`}
      aria-label={t('Actions With Notifications')}
      onClick={onClick}>
   {items.map((item, index) => (
    <li className="notifications-actions-list__item" key={index}>
     {item}
    </li>
   ))}
  </ul>
 );
}

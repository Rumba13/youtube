import './styles.scss';
import { DisableNotificationsButton } from '../../../features/notification-group/disable-notifications';
import { RemoveNotificationButton } from '../../../features/notification-group/remove-notification';
import { FC } from 'react';

export type NotificationsActionsModalSlotType = FC<PropsType & { className?: string }>;

type PropsType = {
  isOpened: boolean;
};

export function NotificationsActionsModal({ isOpened }: PropsType) {
  const items: JSX.Element[] = [<RemoveNotificationButton key={1} />, <DisableNotificationsButton key={2} />];

  return (
    <ul className={`list notifications-actions-list${isOpened ? ' opened' : ''}`}>
      {items.map((item, index) => (
        <li className="notifications-actions-list__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

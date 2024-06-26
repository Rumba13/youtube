import './styles.scss';
import { TextTip } from '../../../../shared/ui/text-tip';
import { observer } from 'mobx-react';
import { notificationsState } from '../../../notifications-modal';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { NotificationsActiveIcon } from '../../../../images/notifications-active-icon';
import { NotificationsIcon as NotificationsIconSvg } from '../../../../images/notifications-icon';
import { useModal } from '../../../../shared/lib/use-modal';
import { NotificationsActionsModalSlotType } from '../../../notifications-actions-modal';
import { NotificationModalSlotType } from '../../../notifications-modal/ui/ui';

type PropsType = {
 ModalSlot: NotificationModalSlotType;
 NotificationActionsModalSlot: NotificationsActionsModalSlotType;
};

export const NotificationsButton = observer(({ ModalSlot, NotificationActionsModalSlot }: PropsType) => {
 const { isModalOpened, toggleModal } = useModal();
 const { t } = useTranslation();

 return (
  <Button className="notification-icon" onClick={toggleModal}>
   <SvgIcon className="notification-icon__icon" Icon={isModalOpened ? NotificationsActiveIcon : NotificationsIconSvg} />

   {!(notificationsState.unViewedNotificationsCount === 0) && (
    <div className="notification-icon__count">{notificationsState.unViewedNotificationsCount}</div>
   )}
   <ModalSlot
    isOpened={isModalOpened}
    onClick={event => event.stopPropagation()}
    NotificationsActionsModalSlot={NotificationActionsModalSlot}
   />
   <TextTip>{t('Notifications')}</TextTip>
  </Button>
 );
});

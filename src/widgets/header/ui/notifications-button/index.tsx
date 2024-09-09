import './styles.scss';
import { TextTip } from '../../../../shared/ui/text-tip';
import { observer } from 'mobx-react';
import { notificationsStore } from '../../../notifications-modal';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import NotificationsActiveIcon from '../../../../assets/images/notifications-active-icon.svg';
import NotificationsIconSvg from '../../../../assets/images/notifications-icon.svg';
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
    <div className="notification-icon-wrapper">
      <Button className="notification-icon" onClick={toggleModal}>
        <SvgIcon
          className="notification-icon__icon"
          icon={isModalOpened ? NotificationsActiveIcon : NotificationsIconSvg}
        />

        {!(notificationsStore.unViewedNotificationsCount === 0) && (
          <div className="notification-icon__count">{notificationsStore.unViewedNotificationsCount}</div>
        )}

        <TextTip>{t('Notifications')}</TextTip>
      </Button>

      <ModalSlot
        isOpened={isModalOpened}
        onClick={event => event.stopPropagation()}
        NotificationsActionsModalSlot={NotificationActionsModalSlot}
      />
    </div>
  );
});

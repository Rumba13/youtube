import './styles.scss';
import { Search } from '../../../features/search';
import { UserProfileIcon } from './user-profile-icon';
import { CreateVideoButton } from './create-video-button';
import { NotificationsButton } from './notifications-button';
import { UserActionsModalSlotType } from '../../user-actions-modal';
import { Logo } from '../../../shared/ui/logo';
import { observer } from 'mobx-react';
import { BackButton } from './back-button';
import { searchStore } from '../../../features/search/model/model';
import { VoiceSearchModalSlotType } from '../../voice-search-modal/ui/ui';
import { MenuButton } from './menu-button';
import { CreateVideoActionsModalSlotType } from '../../create-video-actions-modal';
import { NotificationsActionsModalSlotType } from '../../notifications-actions-modal';
import { NotificationModalSlotType } from '../../notifications-modal/ui/ui';
import clsx from 'clsx';

type PropsType = {
  NotificationsModalSlot: NotificationModalSlotType;
  NotificationActionsModalSlot: NotificationsActionsModalSlotType;
  UserActionsModalSlot: UserActionsModalSlotType;
  VideoActionsModal: CreateVideoActionsModalSlotType;
  VoiceSearchModalSlot: VoiceSearchModalSlotType;
};

export const Header = observer(
  ({
    NotificationsModalSlot,
    NotificationActionsModalSlot,
    UserActionsModalSlot,
    VideoActionsModal,
    VoiceSearchModalSlot,
  }: PropsType) => {
    const { isSearchOpened, setIsSearchOpened } = searchStore;

    return (
      <header className={clsx('header', isSearchOpened && 'opened-search')}>
        {!isSearchOpened && (
          <>
            <MenuButton />
            <Logo />
            <UserProfileIcon UserActionsModalSlot={UserActionsModalSlot} />
            <NotificationsButton
              ModalSlot={NotificationsModalSlot}
              NotificationActionsModalSlot={NotificationActionsModalSlot}
            />
            <CreateVideoButton ModalSlot={VideoActionsModal} />
          </>
        )}
        {isSearchOpened && <BackButton onClick={() => setIsSearchOpened(false)} />}

        <Search VoiceSearchModalSlot={VoiceSearchModalSlot} />
      </header>
    );
  },
);

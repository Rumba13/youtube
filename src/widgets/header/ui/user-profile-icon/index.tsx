import './styles.scss';
import React, { useEffect, useState } from 'react';
import { UserActionsModalSlotType } from '../../../user-actions-modal';
import { useModal } from '../../../../shared/lib/use-modal';
import { userStore } from '../../../../entities/user';
import noUserProfileIcon from '../../../../assets/images/no-user-profile-icon.webp';
import { observer } from 'mobx-react';
import { useTranslation } from 'react-i18next';

type PropsType = {
  UserActionsModalSlot: UserActionsModalSlotType;
};

export const UserProfileIcon = observer(({ UserActionsModalSlot }: PropsType) => {
  const { t } = useTranslation();
  const [userProfileIcon, setUserProfileIcon] = useState<string | undefined>();
  const { isModalOpened, toggleModal, stopPropagationInModal } = useModal(false);
  useEffect(() => {
    setUserProfileIcon(userStore.user?.icon);
  }, [userStore.user?.icon]);

  return (
    <button className="user-profile-icon" onClick={stopPropagationInModal} aria-label={t('Open User Menu')}>
      <UserActionsModalSlot className="user-actions-modal" isOpened={isModalOpened} onClick={stopPropagationInModal} />
      <img
        className="user-profile-icon__icon"
        onClick={toggleModal}
        src={userProfileIcon || noUserProfileIcon}
        alt=""
        width={34}
        height={34}
      />
    </button>
  );
});

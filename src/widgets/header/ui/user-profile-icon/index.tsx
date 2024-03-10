import './styles.scss';
import React, { useEffect, useState } from 'react';
import { UserActionsModalSlotType } from '../../../user-actions-modal';
import { useModal } from '../../../../shared/lib/use-modal';
import { userState } from '../../../../entities/user';
import noUserProfileIcon from '../../../../images/no-user-profile-icon.webp';
import { observer } from 'mobx-react';

type PropsType = {
  UserActionsModalSlot: UserActionsModalSlotType;
};

export const UserProfileIcon = observer(({ UserActionsModalSlot }: PropsType) => {
  const [userProfileIcon, setUserProfileIcon] = useState<string | undefined>();
  const { isModalOpened, toggleModal, stopPropagationInModal } = useModal(false);

  useEffect(() => {
    setUserProfileIcon(userState.user?.icon);
  }, [userState.user?.icon]);

  return (
    <div className="user-profile-icon" onClick={stopPropagationInModal}>
      <UserActionsModalSlot className="user-actions-modal" isOpened={isModalOpened} onClick={stopPropagationInModal} />
      <img
        className="user-profile-icon__icon"
        onClick={toggleModal}
        src={userProfileIcon || noUserProfileIcon}
        alt=""
      />
    </div>
  );
});

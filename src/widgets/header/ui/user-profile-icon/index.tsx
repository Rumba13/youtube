import "./styles.scss";
import React, {useEffect, useState} from "react";
import {UserActionsModalSlotType} from "../../../user-actions-modal";
import {UserService} from "../../../../shared/api/user-service";
import {useModal} from "../../../../shared/lib/use-modal";

type PropsType = {
    UserActionsModalSlot: UserActionsModalSlotType
}

export function UserProfileIcon({UserActionsModalSlot}: PropsType) {
    const [userProfileIcon, setUserProfileIcon] = useState<string | undefined>();
    const {isModalOpened, toggleModal, stopPropagationInModal} = useModal(false);

    useEffect(() => {
        (new UserService()).loadUserProfile("").then(({icon}) => setUserProfileIcon(icon))
    }, []);

    return <div className="user-profile-icon" onClick={stopPropagationInModal}>
        <UserActionsModalSlot className="user-actions-modal" isOpened={isModalOpened} onClick={stopPropagationInModal}/>
        <img className="user-profile-icon__icon" onClick={toggleModal} src={userProfileIcon} alt=""/>
    </div>
}
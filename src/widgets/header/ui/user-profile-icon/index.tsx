import "./styles.scss";
import React, {useEffect, useState} from "react";
import {UserActionsModalSlotType} from "../../../user-actions-modal";
import {UserService} from "../../../../shared/api/user-service";

type PropsType = {
    UserActionsModalSlot: UserActionsModalSlotType
}

export function UserProfileIcon({UserActionsModalSlot}: PropsType) {
    const [userProfileIcon, setUserProfileIcon] = useState<string | undefined>();
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    document.addEventListener("click", () => setIsModalOpened(false));

    useEffect(() => {
        (new UserService()).loadUserByJwt("").then(({icon}) => setUserProfileIcon(icon))
    }, []);

    function toggleModal(event: React.MouseEvent) {

        if (isModalOpened) {
            event.stopPropagation();
        }

        setTimeout(() => setIsModalOpened(!isModalOpened), 0);
        //Check https://github.com/rumba13/youtube/blob/8815f5abc553dd4303ed999dae3c4871e4219b91/src/widgets/header/ui/notifications-button/index.tsx#L33
    }
    function stopPropagationInModal(event: React.MouseEvent) {
        if (isModalOpened) {
            event.stopPropagation();
        }
    }

    return <div className="user-profile-icon" onClick={stopPropagationInModal}>
        <UserActionsModalSlot className="user-actions-modal" isOpened={isModalOpened}/>
        <img className="user-profile-icon__icon" onClick={toggleModal} src={userProfileIcon} alt=""/>
    </div>
}
import "./styles.scss";
import {Search} from "../../../features/search";
import {Logo} from "./logo";
import {MenuIcon} from "./menu-icon";
import {UserProfileIcon} from "./user-profile-icon";
import {CreateVideoButton} from "./create-video-button";
import {ModalSlotType, NotificationsButton} from "./notifications-button";
import {NotificationActionsModalSlotType} from "../../../entities/notification"
import {FC} from "react";
import {UserActionsModalSlotType} from "../../user-actions-modal";

type PropsType = {
    NotificationsModalSlot: ModalSlotType,
    NotificationActionsModalSlot: NotificationActionsModalSlotType,
    UserActionsModalSlot: UserActionsModalSlotType
}

export function Header({NotificationsModalSlot, NotificationActionsModalSlot, UserActionsModalSlot}: PropsType) {
    return <header className="header">
        <MenuIcon/>
        <Logo/>
        <Search/>
        <CreateVideoButton/>
        <NotificationsButton ModalSlot={NotificationsModalSlot}
                             NotificationActionsModalSlot={NotificationActionsModalSlot}/>
        <UserProfileIcon UserActionsModalSlot={UserActionsModalSlot}/>
    </header>
}
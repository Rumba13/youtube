import "./styles.scss";
import {Search} from "../../../features/search";
import {MenuIcon} from "./menu-icon";
import {UserProfileIcon} from "./user-profile-icon";
import {CreateVideoButton} from "./create-video-button";
import {ModalSlotType, NotificationsButton} from "./notifications-button";
import {NotificationActionsModalSlotType} from "../../../entities/notification"
import {UserActionsModalSlotType} from "../../user-actions-modal";
import {VideoActionsModalSlotType} from "../../video-actions-modal";
import {Logo} from "../../../shared/ui/logo";
import {observer} from "mobx-react";
import {BackButton} from "./back-button";
import {searchState} from "../../../features/search/model/model";

type PropsType = {
    NotificationsModalSlot: ModalSlotType,
    NotificationActionsModalSlot: NotificationActionsModalSlotType,
    UserActionsModalSlot: UserActionsModalSlotType,
    VideoActionsModal: VideoActionsModalSlotType
}

export const Header = observer(({
                                    NotificationsModalSlot,
                                    NotificationActionsModalSlot,
                                    UserActionsModalSlot,
                                    VideoActionsModal
                                }: PropsType) => {
    const {isSearchOpened, setIsSearchOpened} = searchState;

    return <header className={`header${isSearchOpened ? " opened-search" : ""}`}>
        {!isSearchOpened && <>
            <MenuIcon/>
            <Logo/>
            <UserProfileIcon UserActionsModalSlot={UserActionsModalSlot}/>
            <NotificationsButton ModalSlot={NotificationsModalSlot}
                                 NotificationActionsModalSlot={NotificationActionsModalSlot}/>
            <CreateVideoButton ModalSlot={VideoActionsModal}/>
        </>
        }
        {isSearchOpened && <BackButton onClick={() => setIsSearchOpened(false)}/>}

        <Search/>
    </header>
})
import "./styles.scss";
import {Routes} from "../../../pages/routes";
import {Header} from "../../../widgets/header";
import {Aside} from "../../../widgets/aside";
import {NotificationsModal} from "../../../widgets/notifications-modal";
import {NotificationsActionsModal} from "../../../widgets/notifications-actions-modal";
import {UserActionsModal} from "../../../widgets/user-actions-modal";
import {VideoActionsModal} from "../../../widgets/video-actions-modal";
import {VoiceSearchModal} from "../../../widgets/voice-search-modal";

export function DesktopLayout() {
    return <>
        <Header VideoActionsModal={VideoActionsModal} UserActionsModalSlot={UserActionsModal}
                NotificationsModalSlot={NotificationsModal} NotificationActionsModalSlot={NotificationsActionsModal}
                VoiceSearchModalSlot={VoiceSearchModal}
        />
        <Aside/>
        <Routes/>
    </>
}
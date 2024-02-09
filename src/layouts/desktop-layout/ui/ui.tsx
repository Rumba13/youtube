import "./styles.scss";
import {Routes} from "../../../pages/routes";
import {Header} from "../../../widgets/header";
import {Aside} from "../../../widgets/aside";
import {NotificationsModal} from "../../../widgets/notifications-modal";
import {NotificationsActionsModal} from "../../../widgets/notifications-actions-modal";
import {UserActionsModal} from "../../../widgets/user-actions-modal";
import {VoiceSearchModal} from "../../../widgets/voice-search-modal";
import {CreateVideoActionsList} from "../../../widgets/create-video-actions-list";

export function DesktopLayout() {
    return <>
        <Header VideoActionsModal={CreateVideoActionsList} UserActionsModalSlot={UserActionsModal}
                NotificationsModalSlot={NotificationsModal} NotificationActionsModalSlot={NotificationsActionsModal}
                VoiceSearchModalSlot={VoiceSearchModal}
        />
        <Aside/>
        <Routes/>
    </>
}
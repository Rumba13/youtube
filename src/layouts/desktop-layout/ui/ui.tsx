import "./styles.scss";
import {Routes} from "../../../pages/routes";
import {Header} from "../../../widgets/header";
import {Aside} from "../../../widgets/aside";
import {NotificationsModal} from "../../../widgets/notifications-modal";
import {NotificationsActionsModal} from "../../../widgets/notifications-actions-modal";

export function DesktopLayout() {
    return <>
        <Header NotificationsModalSlot={NotificationsModal} NotificationActionsModalSlot={NotificationsActionsModal}/>
        <Aside/>
        <Routes/>
    </>
}
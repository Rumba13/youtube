import "./styles.scss";
import {RemoveNotificationButton} from "../../../features/Notifications/remove-notification";
import {DisableNotificationsButton} from "../../../features/Notifications/disable-notifications";

type PropsType = {
    isOpened: boolean
}

export function NotificationsActionsModal({isOpened}: PropsType) { //TODO shared list component
    return <div className={`notifications-actions-modal ${isOpened ? "opened" : ""}`}>
        <RemoveNotificationButton/>
        <DisableNotificationsButton/>
    </div>
}
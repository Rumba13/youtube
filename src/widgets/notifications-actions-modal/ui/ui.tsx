import "./styles.scss";
import {VerticalList} from "../../../shared/ui/vertical-list";
import {DisableNotificationsButton} from "../../../features/notification-group/disable-notifications";
import {RemoveNotificationButton} from "../../../features/notification-group/remove-notification";

type PropsType = {
    isOpened: boolean
}

export function NotificationsActionsModal({isOpened}: PropsType) {
    return <VerticalList className={`notifications-actions-modal${isOpened ? " opened" : ""}`} items={[
        <RemoveNotificationButton/>,
        <DisableNotificationsButton/>
    ]}/>
}
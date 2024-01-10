import "./styles.scss";
import {RemoveNotificationButton} from "../../../features/Notifications/remove-notification";
import {DisableNotificationsButton} from "../../../features/Notifications/disable-notifications";
import {VerticalList} from "../../../shared/ui/vertical-list";

type PropsType = {
    isOpened: boolean
}

export function NotificationsActionsModal({isOpened}: PropsType) { //TODO shared list component
    return <VerticalList className={`notifications-actions-modal${isOpened ? " opened" : ""}`} items={[
        <RemoveNotificationButton/>,
        <DisableNotificationsButton/>
    ]}/>
}
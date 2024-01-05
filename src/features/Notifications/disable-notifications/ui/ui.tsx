import "./styles.scss";
import {CrossedBellIcon} from "../../../../shared/ui/crossed-bell-icon";

export function DisableNotificationsButton() {
    return <div className="disable-notifications-button">
        <CrossedBellIcon className="disable-notifications-button__icon"/>
        <span className="disable-notifications-button__title">Отключить все уведомления о канале "Nostoro"</span>
    </div>
}
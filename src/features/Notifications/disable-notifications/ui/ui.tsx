import "./styles.scss";
import {CrossedBellIcon} from "../../../../images/crossed-bell-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";

export function DisableNotificationsButton() {
    return <div className="disable-notifications-button">
        <SvgIcon className="disable-notifications-button__icon" Icon={CrossedBellIcon}/>
        <span className="disable-notifications-button__title">Отключить все уведомления о канале "Nostoro"</span>
    </div>
}
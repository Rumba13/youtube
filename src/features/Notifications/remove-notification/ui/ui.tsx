import "./styles.scss";
import {CrossedEyeIcon} from "../../../../shared/ui/crossed-eye-icon";

export function RemoveNotificationButton() {
    return <div className="remove-notification-button">
        <CrossedEyeIcon className="remove-notification-button__icon"/>
        <span className="remove-notification-button__title">Скрыть уведомление</span>
    </div>
}
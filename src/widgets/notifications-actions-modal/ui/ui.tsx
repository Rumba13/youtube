import "./styles.scss";
import {DisableNotificationsButton} from "../../../features/notification-group/disable-notifications";
import {RemoveNotificationButton} from "../../../features/notification-group/remove-notification";
import {FC} from "react";

export type NotificationsActionsModalSlotType = FC<PropsType & {className?:string}>

type PropsType = {
    isOpened: boolean
}


export function NotificationsActionsModal({isOpened}: PropsType) {
    const items: JSX.Element[] = [
        <RemoveNotificationButton/>,
        <DisableNotificationsButton/>
    ]

    return <ul className={`list notifications-actions-list${isOpened ? " opened" : ""}`}>
        {items.map(item => <li className="notifications-actions-list__item">{item}</li>)}
    </ul>
}
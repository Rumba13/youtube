import "./styles.scss";
import {NotificationsActiveIcon} from "../../../../images/notifications-active-icon";
import React from "react";
import {NotificationsIcon as SharedNotificationsIcon} from "../../../../images/notifications-icon"; //TODO refactoring fix naming
import {SvgIcon} from "../../../../shared/ui/svg-icon";

type PropsType = {
    isActive:boolean
}
export function NotificationIcon({isActive}:PropsType){
    if(isActive){
        return <SvgIcon className="notification-icon__icon" Icon={NotificationsActiveIcon}/>
    }
    else {
        return <SvgIcon className="notification-icon__icon" Icon={SharedNotificationsIcon}/>
    }
}
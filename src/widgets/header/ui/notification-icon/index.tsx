import "./styles.scss";
import {NotificationsActiveIcon} from "../../../../shared/ui/notifications-active-icon";
import React from "react";
import {NotificationsIcon as SharedNotificationIcon} from "../../../../shared/ui/notifications-icon";

type PropsType = {
    isActive:boolean
}
export function NotificationIcon({isActive}:PropsType){
    if(isActive){
        return <NotificationsActiveIcon/>;
    }
    else {
        return <SharedNotificationIcon/>
    }
}
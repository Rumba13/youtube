import "./styles.scss";
import React from "react";
import {NotificationsActiveIcon} from "../../../../images/notifications-active-icon";
import {NotificationsIcon as NotificationsIconSvg} from "../../../../images/notifications-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";

type PropsType = {
    isActive:boolean
}
export function NotificationsIcon({isActive}:PropsType){
    if(isActive){
        return <SvgIcon className="notification-icon__icon" Icon={NotificationsActiveIcon}/>
    }
    else {
        return <SvgIcon className="notification-icon__icon" Icon={NotificationsIconSvg}/>
    }
}
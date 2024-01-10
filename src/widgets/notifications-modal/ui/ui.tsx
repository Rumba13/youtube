import "./styles.scss";
import {MouseEventHandler, useEffect, useState} from "react";
import {NotificationActionsModalSlotType, NotificationCard} from "../../../entities/notification";
import {GearIcon} from "../../header/ui/gear-icon";
import {notificationsState} from "../model/model";
import {useTranslation} from "react-i18next";

type PropsType = {
    isOpened: boolean,
    onClick: MouseEventHandler,
    NotificationsActionsModalSlot: NotificationActionsModalSlotType
}

export function NotificationsModal({isOpened, onClick, NotificationsActionsModalSlot}: PropsType) {
    const [openedNotificationsListId, setOpenedModalId] = useState<string>("")
    const {t} = useTranslation();


    useEffect(() => {
        notificationsState.loadNotificationsData();
    }, []);

    if (!notificationsState.notifications) {
        return <div>Loading...</div>
    }

    return <div className={`notifications${isOpened ? " opened" : ""}`} onClick={onClick}>
        <div className="notifications-header">
            <span className="header__title">{t("Notifications")}</span>
            <GearIcon/>
        </div>
        <div className="notifications-list">
            {notificationsState.notifications.map(notification =>
                <NotificationCard notification={notification} ModalSlot={NotificationsActionsModalSlot}
                                  openedModal={openedNotificationsListId} setOpenedModalId={setOpenedModalId}
                                  key={notification.id}/>)}
        </div>
    </div>
}
import "./styles.scss";
import {MouseEventHandler, useEffect, useState} from "react";
import {NotificationActionsModalSlotType, NotificationCard} from "../../../entities/notification";
import {notificationsState} from "../../../entities/notification";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {SettingsButton} from "../../header";
import {Button} from "../../../shared/ui/button";

type PropsType = {
    isOpened: boolean,
    onClick: MouseEventHandler,
    NotificationsActionsModalSlot: NotificationActionsModalSlotType
}

export const NotificationsModal = observer(({isOpened, onClick, NotificationsActionsModalSlot}: PropsType) => {
    const [openedNotificationsModalId, setOpenedModalId] = useState<string>("")
    const {t} = useTranslation();

    useEffect(() => {
        notificationsState.loadNotifications();
    }, []);

    if (notificationsState.isLoading) {
        return <></>
    }

    return <div className={`notifications${isOpened ? " opened" : ""}`} onClick={onClick}>
        <div className="notifications-header">
            <span className="header__title">{t("Notifications")}</span>
            <SettingsButton/>
        </div>
        <div className="notifications-list">
            {notificationsState.notifications.map(notification =>
                <NotificationCard notification={notification} ModalSlot={NotificationsActionsModalSlot}
                                  openedModal={openedNotificationsModalId} setOpenedModalId={setOpenedModalId}
                                  key={notification.id}/>)}
        </div>
    </div>

})
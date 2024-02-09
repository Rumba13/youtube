import "./styles.scss";
import {MouseEventHandler, useEffect} from "react";
import {NotificationActionsModalSlotType, NotificationCard} from "../../../entities/notification";
import {notificationsState} from "../../../entities/notification";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";
import {SettingsButton} from "../../header";

type PropsType = {
    isOpened: boolean,
    onClick: MouseEventHandler,
    NotificationsActionsModalSlot: NotificationActionsModalSlotType
}

export const NotificationsModal = observer(({isOpened, onClick, NotificationsActionsModalSlot}: PropsType) => {
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
                                  key={notification.id}/>)}
        </div>
    </div>

})
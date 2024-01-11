import "./styles.scss";
import {MouseEventHandler, useEffect, useState} from "react";
import {NotificationActionsModalSlotType, NotificationCard} from "../../../entities/notification";
import {GearIcon} from "../../header/ui/gear-icon";
import {notificationsState} from "../../../entities/notification";
import {useTranslation} from "react-i18next";
import {observer} from "mobx-react";

type PropsType = {
    isOpened: boolean,
    onClick: MouseEventHandler,
    NotificationsActionsModalSlot: NotificationActionsModalSlotType
}

export const NotificationsModal = observer(({isOpened, onClick, NotificationsActionsModalSlot}: PropsType) => {
    const [openedNotificationsListId, setOpenedModalId] = useState<string>("")
    const {t} = useTranslation();


    useEffect(() => {
        notificationsState.loadNotifications();
    }, []);

    if (notificationsState.isLoading) {
        return <div>sd</div>
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
})
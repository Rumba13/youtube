import "./styles.scss";
import React, {JSX, MouseEventHandler, useEffect, useState} from "react";
import {TextTip} from "../../../../shared/ui/text-tip";
import {observer} from "mobx-react";
import {notificationsState} from "../../../notifications-modal";
import {NotificationIcon} from "../notification-icon";
import {NotificationActionsModalSlotType} from "../../../../entities/notification";

type PropsType = {
    ModalSlot: ModalSlotType,
    NotificationActionsModalSlot: NotificationActionsModalSlotType
}

export type ModalSlotType = (props: {
    isOpened: boolean,
    onClick: MouseEventHandler,
    NotificationsActionsModalSlot: NotificationActionsModalSlotType
}) => JSX.Element;

export const NotificationsButton = observer(({ModalSlot, NotificationActionsModalSlot}: PropsType) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    document.addEventListener("click", () => setIsModalOpened(false))

    function toggleModal(event: React.MouseEvent) {

        if (isModalOpened) {
            event.stopPropagation();
        }

        setTimeout(() => setIsModalOpened(!isModalOpened), 0);
        //its need to avoid event absorption by e.stopPropagation
        //Without that "setTimeout" and "if (isModalOpened){...}" other modals won't close with click on element contains e.stopPropagation like modals buttons
    }

    return <div className="notification-icon"
                onClick={toggleModal}>
        <NotificationIcon isActive={isModalOpened}/>
        <div className="notification-icon__interaction"></div>
        {notificationsState.unViewedNotificationsCount === 0
            ? <></>
            : <div className="notification-icon__count">{notificationsState.unViewedNotificationsCount}</div>
        }
        <ModalSlot isOpened={isModalOpened} onClick={event => event.stopPropagation()}
                   NotificationsActionsModalSlot={NotificationActionsModalSlot}/>
        <TextTip>Уведомления</TextTip>
    </div>
})
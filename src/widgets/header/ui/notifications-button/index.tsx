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
    document.addEventListener("click", () => setIsModalOpened(false));

    function toggleModal(e: React.MouseEvent) {
        e.stopPropagation();
        setIsModalOpened(!isModalOpened);
    }

    function stopPropagationInModal(e: React.MouseEvent) {
        e.stopPropagation();
    }

    return <div className="notification-icon"
                onClick={toggleModal}>
        <NotificationIcon isActive={isModalOpened}/>
        <div className="notification-icon__interaction"></div>
        {notificationsState.unViewedNotificationsCount === 0
            ? <></>
            : <div className="notification-icon__count">{notificationsState.unViewedNotificationsCount}</div>
        }
        <ModalSlot isOpened={isModalOpened} onClick={stopPropagationInModal}
                   NotificationsActionsModalSlot={NotificationActionsModalSlot}/>
        <TextTip>Уведомления</TextTip>
    </div>
})
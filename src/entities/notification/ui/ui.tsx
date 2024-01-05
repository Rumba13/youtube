import "./styles.scss";
import {NotificationType} from "../../../shared/api/types/notification-type";
import {DotsMenuIcon} from "./dots-menu-icon";

export type PropsType = {
    notification: NotificationType,
    ModalSlot: ModalSlotType,
    openedModal: string,
    setOpenedModalId: Function
}

export type ModalSlotType = (props: { isOpened: boolean }) => JSX.Element;

export function NotificationCard({notification, ModalSlot, setOpenedModalId, openedModal}: PropsType) {
    const {title, previewImage, icon, releasedAgo} = notification;

    if (!notification) {
        return <div>Loading...</div>
    }

    return <div className="notification">
        <img className="notification__image" src={icon} alt=""/>
        <h2 className="notification__title">{title}</h2>
        <img src={previewImage} alt="" className="notification__preview-image"/>
        <span className="notification__release-ago">2 дня назад</span>
        <div className="notification__new-mark"></div>
        <DotsMenuIcon currentModalId={title} openedModal={openedModal} setOpenedModalId={setOpenedModalId}
                      ModalSlot={ModalSlot}/>
    </div>
}
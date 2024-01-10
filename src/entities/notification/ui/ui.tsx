import "./styles.scss";
import {NotificationType} from "../../../shared/api/types/notification-type";
import {DotsMenuIcon} from "./dots-menu-icon";
import {Trans, useTranslation} from "react-i18next";
import i18next from "i18next";

export type PropsType = {
    notification: NotificationType,
    ModalSlot: ModalSlotType,
    openedModal: string,
    setOpenedModalId: Function
}

export type ModalSlotType = (props: { isOpened: boolean }) => JSX.Element;

export function NotificationCard({notification, ModalSlot, setOpenedModalId, openedModal}: PropsType) {
    const {title, previewImage, icon, releasedAgo} = notification; //TODO FUTURE refactor all when add state
    const {t, i18n} = useTranslation();
    const releasedHoursAgo = 6;
    const channelName = "Nostoro";
    const contentType = "stream";
    const contentName = "Что у тебя за дурацкое имя насос?";

    if (!notification) {
        return <div>Loading...</div>
    }

    return <div className="notification">
        <img className="notification__image" src={icon} alt=""/>
        <h2 className="notification__title">
            <Trans i18nKey="On The Channel" channelName={channelName}>{{channelName}}</Trans>&nbsp;

            {contentType === "stream"
                ? <Trans i18nKey="New Stream" streamName={contentName}>{{streamName: contentName}}</Trans>
                : <Trans i18nKey="New Video" streamName={contentName}>{{videoName: contentName}}</Trans>
            }


        </h2>
        <img src={previewImage} alt="" className="notification__preview-image"/>
        <span className="notification__release-ago">
            <Trans i18nKey="keyHour" count={releasedHoursAgo}>{{count: releasedHoursAgo}}</Trans> <Trans i18nKey="Ago"/>
        </span>
        <div className="notification__new-mark"></div>
        <DotsMenuIcon currentModalId={title} openedModal={openedModal} setOpenedModalId={setOpenedModalId}
                      ModalSlot={ModalSlot}/>
    </div>
}
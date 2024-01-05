import "./styles.scss";
import {NotificationActionsModalSlotType} from "../../index";

type PropsType = {
    ModalSlot: NotificationActionsModalSlotType,
    openedModal: string,
    setOpenedModalId: Function,
    currentModalId: string
}

export function DotsMenuIcon({ModalSlot, openedModal, setOpenedModalId, currentModalId}: PropsType) {
    const isOpened = openedModal === currentModalId;

    function onIconClickHandler() {
        if (isOpened) {
            setOpenedModalId("");
        } else {
            setOpenedModalId(currentModalId);
        }
    }

    return <div className={`dots-menu-icon ${isOpened ? "opened" : ""}`}
                onClick={onIconClickHandler}>
        <svg className="dots-menu-icon__icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"
             height="24" viewBox="0 0 24 24"
             width="24" focusable="false">
            <path
                d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
        </svg>
        <div className="dots-menu-icon__interaction"></div>
        <ModalSlot isOpened={isOpened}/>
    </div>
}
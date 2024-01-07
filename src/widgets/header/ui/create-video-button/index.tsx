import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import React, {useState} from "react";
import {CreateVideoActiveIcon} from "../../../../images/create-video-active-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {CreateVideoIcon} from "../../../../images/create-video-icon";
import {VideoActionsModalSlotType} from "../../../video-actions-modal";

type PropsType = {
    ModalSlot: VideoActionsModalSlotType
}

export function CreateVideoButton({ModalSlot}: PropsType) {//TODO separate modal from component
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    document.addEventListener("click", () => setIsModalOpened(false));

    function toggleModal(event: React.MouseEvent) {

        if (isModalOpened) {
            event.stopPropagation();
        }
        setTimeout(() => setIsModalOpened(!isModalOpened), 0)
        //Check https://github.com/rumba13/youtube/blob/8815f5abc553dd4303ed999dae3c4871e4219b91/src/widgets/header/ui/notifications-button/index.tsx#L33
    }


    return <div className="create-video-button" onClick={toggleModal}>
        <div className="create-video-button__interaction"></div>

        {isModalOpened
            ? <SvgIcon className="create-video-icon__icon" Icon={CreateVideoActiveIcon}/>
            : <SvgIcon className="create-video-icon__icon" Icon={CreateVideoIcon}/>
        }

        <ModalSlot isOpened={isModalOpened}/>
        <TextTip>Создать</TextTip>
    </div>
}
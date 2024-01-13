import "./styles.scss";
import React, {useState} from "react";
import {TextTip} from "../../../../shared/ui/text-tip";
import {CreateVideoActiveIcon} from "../../../../images/create-video-active-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {CreateVideoIcon} from "../../../../images/create-video-icon";
import {VideoActionsModalSlotType} from "../../../video-actions-modal";
import {useTranslation} from "react-i18next";
import {Button} from "../../../../shared/ui/button";

type PropsType = {
    ModalSlot: VideoActionsModalSlotType
}

export function CreateVideoButton({ModalSlot}: PropsType) {//TODO separate modal from component
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const {t} = useTranslation();
    document.addEventListener("click", () => setIsModalOpened(false));


    function toggleModal(event: React.MouseEvent) {

        if (isModalOpened) {
            event.stopPropagation();
        }
        setTimeout(() => setIsModalOpened(!isModalOpened), 0)
        //Check https://github.com/rumba13/youtube/blob/8815f5abc553dd4303ed999dae3c4871e4219b91/src/widgets/header/ui/notifications-button/index.tsx#L33
    }

    return <Button className="create-video-button" onClick={toggleModal}>
        <SvgIcon className="create-video-button__icon" Icon={isModalOpened ? CreateVideoActiveIcon : CreateVideoIcon}/>
        <ModalSlot isOpened={isModalOpened}/>
        <TextTip>{t("Create")}</TextTip>
    </Button>
}
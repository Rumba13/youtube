import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import {CreateVideoActiveIcon} from "../../../../images/create-video-active-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {CreateVideoIcon} from "../../../../images/create-video-icon";
import {useTranslation} from "react-i18next";
import {Button} from "../../../../shared/ui/button";
import {CreateVideoActionsListSlotType} from "../../../create-video-actions-list";
import {useModal} from "../../../../shared/lib/use-modal";

type PropsType = {
    ModalSlot: CreateVideoActionsListSlotType
}

export function CreateVideoButton({ModalSlot}: PropsType) {
    const {t} = useTranslation();
    const {isModalOpened, toggleModal} = useModal(false);

    return <Button className="create-video-button" onClick={toggleModal}>
        <SvgIcon className="create-video-button__icon" Icon={isModalOpened ? CreateVideoActiveIcon : CreateVideoIcon}/>
        <ModalSlot isOpened={isModalOpened}/>
        <TextTip>{t("Create")}</TextTip>
    </Button>
}
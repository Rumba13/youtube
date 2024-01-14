import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import {useTranslation} from "react-i18next";
import {Button} from "../../../../shared/ui/button";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {MenuIcon} from "../../../../images/menu-icon";
import {asideState} from "../../../aside";
import {observer} from "mobx-react";

export const MenuButton = observer(() => {
    const {t} = useTranslation();
    const {isMinified, setIsMinified} = asideState;

    return <Button className="menu-button" onClick={() => setIsMinified(!isMinified)}>
        <SvgIcon className="menu-button__icon" Icon={MenuIcon}/>
        <TextTip>{t("VladIsAssHole")}</TextTip>
    </Button>
})
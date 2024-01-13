import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import {useTranslation} from "react-i18next";
import {Button} from "../../../../shared/ui/button";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {MenuIcon} from "../../../../images/menu-icon";

export function MenuButton() {
    const {t} = useTranslation();

    return <Button className="menu-button">
        <SvgIcon className="menu-button__icon" Icon={MenuIcon}/>
        <TextTip>{t("VladIsAssHole")}</TextTip>
    </Button>
}
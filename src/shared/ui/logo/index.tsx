import "./styles.scss";
import {useTranslation} from "react-i18next";
import {LogoIcon} from "../../../images/logo-icon";
import {SvgIcon} from "../svg-icon";

export function Logo() {
    const {i18n, t} = useTranslation();

    return <div className="logo" title={t("YouTube Main Page")}>
        <SvgIcon Icon={LogoIcon}/>
        <span className="country-code">{i18n.language.toUpperCase()}</span>
    </div>
}
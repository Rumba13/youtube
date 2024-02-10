import "./styles.scss";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {GearIcon} from "../../../../images/gear-icon";
import {FlagIcon} from "../../../../images/flag-icon";
import {QuestionIcon} from "../../../../images/question-icon";
import {DialogIcon} from "../../../../images/dialog-icon";
import {useTranslation} from "react-i18next";

export function ActionsArticle() {
    const {t} = useTranslation();

    const items: JSX.Element[] = [
        <li className="aside-item" title={t("Settings")}>
            <SvgIcon className="aside-item__icon" Icon={GearIcon}/>
            <span className="aside-item__title">{t("Settings")}</span>
        </li>,
        <li className="aside-item" title={t("Report History")}>
            <SvgIcon className="aside-item__icon" Icon={FlagIcon}/>
            <span className="aside-item__title">{t("Report History")}</span>
        </li>,
        <li className="aside-item" title={t("Inquiry")}>
            <SvgIcon className="aside-item__icon" Icon={QuestionIcon}/>
            <span className="aside-item__title">{t("Inquiry")}</span>
        </li>,
        <li className="aside-item" title={t("Send Review")}>
            <SvgIcon className="aside-item__icon" Icon={DialogIcon}/>
            <span className="aside-item__title">{t("Send Review")}</span>
        </li>
    ]

    return <ul className="aside-article actions-article">
        {items.map(item => item)}
    </ul>
}
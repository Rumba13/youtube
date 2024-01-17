import "./styles.scss";
import {NewVerticalList} from "../../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../../shared/ui/new-vertical-list/vertical-list-item";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {GearIcon} from "../../../../images/gear-icon";
import {FlagIcon} from "../../../../images/flag-icon";
import {QuestionIcon} from "../../../../images/question-icon";
import {DialogIcon} from "../../../../images/dialog-icon";
import {useTranslation} from "react-i18next";

export function ActionsArticle() {
    const {t} = useTranslation();

    return <NewVerticalList className="aside-article actions-article">
        <VerticalListItem className="aside-item" title={t("Settings")}>
            <SvgIcon className="aside-item__icon" Icon={GearIcon}/>
            <span className="aside-item__title">{t("Settings")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Report History")}>
            <SvgIcon className="aside-item__icon" Icon={FlagIcon}/>
            <span className="aside-item__title">{t("Report History")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Inquiry")}>
            <SvgIcon className="aside-item__icon" Icon={QuestionIcon}/>
            <span className="aside-item__title">{t("Inquiry")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Send Review")}>
            <SvgIcon className="aside-item__icon" Icon={DialogIcon}/>
            <span className="aside-item__title">{t("Send Review")}</span>
        </VerticalListItem>
    </NewVerticalList>

}
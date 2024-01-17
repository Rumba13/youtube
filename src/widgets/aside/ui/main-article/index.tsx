import "./styles.scss"
import {NewVerticalList} from "../../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../../shared/ui/new-vertical-list/vertical-list-item";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {HomeIcon} from "../../../../images/home-icon";
import {ShortsIcon} from "../../../../images/shorts-icon";
import {SubscriptionsIcon} from "../../../../images/subscriptions-icon";
import {useTranslation} from "react-i18next";

export function MainArticle() {
    const {t} = useTranslation();

    return <NewVerticalList className="aside-article main-article">
        <VerticalListItem className="aside-item active" title={t("Home")}>
            <SvgIcon className="aside-item__icon" Icon={HomeIcon}/>
            <span className="aside-item__title">{t("Home")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Shorts")}>
            <SvgIcon className="aside-item__icon" Icon={ShortsIcon}/>
            <span className="aside-item__title">{t("Shorts")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Subscriptions")}>
            <SvgIcon className="aside-item__icon" Icon={SubscriptionsIcon}/>
            <span className="aside-item__title">{t("Subscriptions")}</span>
        </VerticalListItem>
    </NewVerticalList>
}
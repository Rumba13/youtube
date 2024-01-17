import "./styles.scss";
import {NewVerticalList} from "../../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../../shared/ui/new-vertical-list/vertical-list-item";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {TrendingIcon} from "../../../../images/trending-icon";
import {MusicIcon} from "../../../../images/music-icon";
import {GamingIcon} from "../../../../images/gaming-icon";
import {SportIcon} from "../../../../images/sport-icon";
import {useTranslation} from "react-i18next";

export function NavigationArticle() {
    const {t} = useTranslation();

    return <NewVerticalList
        className="aside-article navigation">
        <span title={t("Subscriptions")} className="aside-item__title article-title">{t("Explore")}</span>
        <VerticalListItem className="aside-item" title={t("Trending")}>
            <SvgIcon className="aside-item__icon" Icon={TrendingIcon}/>
            <span className="aside-item__title">{t("Trending")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Music")}>
            <SvgIcon className="aside-item__icon" Icon={MusicIcon}/>
            <span className="aside-item__title">{t("Music")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Gaming")}>
            <SvgIcon className="aside-item__icon" Icon={GamingIcon}/>
            <span className="aside-item__title">{t("Gaming")}</span>
        </VerticalListItem>
        <VerticalListItem className="aside-item" title={t("Sport")}>
            <SvgIcon className="aside-item__icon" Icon={SportIcon}/>
            <span className="aside-item__title">{t("Sport")}</span>
        </VerticalListItem>
    </NewVerticalList>
}
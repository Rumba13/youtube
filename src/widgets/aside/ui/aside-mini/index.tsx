import "./styles.scss";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {HomeIcon} from "../../../../images/home-icon";
import {ShortsIcon} from "../../../../images/shorts-icon";
import {SubscriptionsIcon} from "../../../../images/subscriptions-icon";
import {YouIcon} from "../../../../images/you-icon";
import {useTranslation} from "react-i18next";

export function AsideMini() {
    const {t} = useTranslation();

    const items: JSX.Element[] = [
        <li className="aside-item active" title={t("Home")}>
            <SvgIcon className="aside-item__icon" Icon={HomeIcon}/>
            <span className="aside-item__title">{t("Home")}</span>
        </li>,
        <li className="aside-item" title={t("Shorts")}>
            <SvgIcon className="aside-item__icon" Icon={ShortsIcon}/>
            <span className="aside-item__title">{t("Shorts")}</span>
        </li>,
        <li className="aside-item" title={t("Subscriptions")}>
            <SvgIcon className="aside-item__icon" Icon={SubscriptionsIcon}/>
            <span className="aside-item__title">{t("Subscriptions")}</span>
        </li>,
        <li className="aside-item" title={t("You")}>
            <SvgIcon className="aside-item__icon" Icon={YouIcon}/>
            <span className="aside-item__title">{t("You")}</span>
        </li>
    ]

    return <ul className="aside-mini">
        {items.map(item => item)}
    </ul>
}
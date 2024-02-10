import "./styles.scss";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {YoutubeIcon} from "../../../../images/youtube-icon";
import {YoutubeCreatorStudioIcon} from "../../../../images/youtube-creator-studio-icon";
import {YoutubeMusicIcon} from "../../../../images/youtube-music-icon";
import {YoutubeForKids} from "../../../../images/youtube-for-kids";
import {useTranslation} from "react-i18next";

export function OtherArticle() {
    const {t} = useTranslation();

    const items: JSX.Element[] = [
        <li className="aside-item" title={t("YouTube Premium")}>
            <SvgIcon className="aside-item__icon" Icon={YoutubeIcon}/>
            <span className="aside-item__title">{t("YouTube Premium")}</span>
        </li>,
        <li className="aside-item" title={t("YouTube Studio")}>
            <SvgIcon className="aside-item__icon" Icon={YoutubeCreatorStudioIcon}/>
            <span className="aside-item__title">{t("YouTube Studio")}</span>
        </li>,
        <li className="aside-item" title={t("YouTube Music")}>
            <SvgIcon className="aside-item__icon" Icon={YoutubeMusicIcon}/>
            <span className="aside-item__title">{t("YouTube Music")}</span>
        </li>,
        <li className="aside-item" title={t("YouTube Kids")}>
            <SvgIcon className="aside-item__icon" Icon={YoutubeForKids}/>
            <span className="aside-item__title">{t("YouTube Kids")}</span>
        </li>
    ]

    return <ul className="aside-article other-article">
        <span className="aside-item__title article-title" title={t("More From YouTube")}>{t("More From YouTube")}</span>
        {items.map(item => item)}
    </ul>
}
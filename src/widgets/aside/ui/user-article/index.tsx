import "./styles.scss";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {ArrowIcon} from "../../../../images/arrow-icon";
import {ChannelIcon} from "../../../../images/channel-icon";
import {HistoryIcon} from "../../../../images/history-icon";
import {PlayVideoIcon} from "../../../../images/play-video-icon";
import {ClocksIcon} from "../../../../images/clocks-icon";
import {LikeIcon} from "../../../../images/like-icon";
import {PlaylistIcon} from "../../../../images/playlist-icon";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {userState} from "../../../../entities/user";
import {observer} from "mobx-react";
import {ExpandButton} from "../expand-button";

export const UserArticle = observer(() => {
    const [isUserArticleExpanded, setIsUserArticleExpanded] = useState<boolean>(false);
    const {t} = useTranslation();
    const {playlists} = userState;
    const items:JSX.Element[] = [
        <li className="aside-item you-item" title={t("You")}>
            <span className="aside-item__title">{t("You")}</span>
            <SvgIcon className="aside-item__icon" Icon={ArrowIcon}/>
        </li>,
        <li className="aside-item" title={t("My Channel")}>
            <SvgIcon className="aside-item__icon" Icon={ChannelIcon}/>
            <span className="aside-item__title">{t("My Channel")}</span>
        </li>,
        <li className="aside-item" title={t("History")}>
            <SvgIcon className="aside-item__icon" Icon={HistoryIcon}/>
            <span className="aside-item__title">{t("History")}</span>
        </li>,
        <li className="aside-item" title={t("Your Videos")}>
            <SvgIcon className="aside-item__icon" Icon={PlayVideoIcon}/>
            <span className="aside-item__title">{t("Your Videos")}</span>
        </li>,
        <li className="aside-item" title={t("Watch Later")}>
            <SvgIcon className="aside-item__icon" Icon={ClocksIcon}/>
            <span className="aside-item__title">{t("Watch Later")}</span>
        </li>,
        <li className="aside-item" title={t("Liked")}>
            <SvgIcon className="aside-item__icon" Icon={LikeIcon}/>
            <span className="aside-item__title">{t("Liked")}</span>
        </li>
    ]

    useEffect(() => {
        userState.loadPlaylists();
    }, [])

    return <ul className={`aside-article user-article${isUserArticleExpanded ? " " + "expanded" : ""}`}>
        {items.map(item => item)}

        {playlists.map(({title, href}) => <li className="aside-item" title={title}>
            <a href={href}>
                <SvgIcon className="aside-item__icon" Icon={PlaylistIcon}/>
                <span className="aside-item__title">{title}</span>
            </a>
        </li>)}

        <ExpandButton title={isUserArticleExpanded ? t("Collapse") : t("Expand")}
                      onClick={() => setIsUserArticleExpanded(!isUserArticleExpanded)}
                      isExpanded={isUserArticleExpanded}/>

    </ul>

})
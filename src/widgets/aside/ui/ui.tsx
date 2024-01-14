import "./styles.scss";
import {asideState} from "../model/model";
import {observer} from "mobx-react";
import {SvgIcon} from "../../../shared/ui/svg-icon";
import {HomeIcon} from "../../../images/home-icon";
import {ShortsIcon} from "../../../images/shorts-icon";
import {SubscriptionsIcon} from "../../../images/subscriptions-icon";
import {YouIcon} from "../../../images/you-icon";
import {Trans, useTranslation} from "react-i18next";
import {NewVerticalList} from "../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../shared/ui/new-vertical-list/vertical-list-item";
import {PlaylistIcon} from "../../../images/playlist-icon";
import {HistoryIcon} from "../../../images/history-icon";
import {ChannelIcon} from "../../../images/channel-icon";
import {PlayVideoIcon} from "../../../images/play-video-icon";
import {ClocksIcon} from "../../../images/clocks-icon";
import {LikeIcon} from "../../../images/like-icon";
import {ArrowIcon} from "../../../images/arrow-icon";
import ahegao1 from "../../../images/temp/ahegao-1.jpg";
import ahegao2 from "../../../images/temp/ahegao-2.jpg";
import ahegao3 from "../../../images/temp/ahegao-3.jpg";
import {Icon} from "../../../shared/ui/icon";
import {TrendingIcon} from "../../../images/trending-icon";
import {MusicIcon} from "../../../images/music-icon";
import {GamingIcon} from "../../../images/gaming-icon";
import {SportIcon} from "../../../images/sport-icon";
import {YoutubeIcon} from "../../../images/youtube-icon";
import {YoutubeCreatorStudioIcon} from "../../../images/youtube-creator-studio-icon";
import {YoutubeMusicIcon} from "../../../images/youtube-music-icon";
import {YoutubeForKids} from "../../../images/youtube-for-kids";
import {GearIcon} from "../../../images/gear-icon";
import {DialogIcon} from "../../../images/dialog-icon";
import {QuestionIcon} from "../../../images/question-icon";
import {FlagIcon} from "../../../images/flag-icon";


type PlaylistType = {
    title: string,
    href: string
}
type ChannelType = {
    icon: string,
    title: string,
    isNewVideo: boolean,
    isStream: boolean
}

export const Aside = observer(() => { //TODO Отрефакторить эту бич
    const {
        isMinified,
        isUserArticleExpanded,
        setIsUserArticleExpanded,
        isSubscriptionArticleExpanded,
        setIsSubscriptionArticleExpanded
    } = asideState;

    const {t} = useTranslation();

    const playlists: PlaylistType[] = [
        {
            title: "The Talos Principle",
            href: "https://www.youtube.com/playlist?list=PLvXNXbRfDbwWCLV_A_s1C8pPPM1iPIWZM"
        }
    ]
    const subscriptions: ChannelType[] = [
        {
            title: "Kabanus",
            icon: ahegao1,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "DimkaTv",
            icon: ahegao2,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "ZVERI",
            icon: ahegao3,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "Kabanus",
            icon: ahegao1,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "DimkaTv",
            icon: ahegao2,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "ZVERI",
            icon: ahegao3,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "Kabanus",
            icon: ahegao1,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "DimkaTv",
            icon: ahegao2,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "ZVERI",
            icon: ahegao3,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "ZVERI",
            icon: ahegao3,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "ZVERI",
            icon: ahegao3,
            isNewVideo: false,
            isStream: false
        },
        {
            title: "ZVERI",
            icon: ahegao3,
            isNewVideo: false,
            isStream: false
        },
    ]

    const expandButtonTitle = t("Show More Channels", {channelCount: subscriptions.length - 7});


    if (isMinified) {
        return <NewVerticalList className="aside-mini">
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
            <VerticalListItem className="aside-item" title={t("You")}>
                <SvgIcon className="aside-item__icon" Icon={YouIcon}/>
                <span className="aside-item__title">{t("You")}</span>
            </VerticalListItem>
        </NewVerticalList>


    } else {
        return <aside className="aside">
            <NewVerticalList className="aside-article">
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

            <NewVerticalList className={`aside-article user-article${isUserArticleExpanded ? " " + "expanded" : ""}`}>
                <VerticalListItem className="aside-item you-item" title={t("You")}>
                    <span className="aside-item__title">{t("You")}</span>
                    <SvgIcon className="aside-item__icon" Icon={ArrowIcon}/>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("My Channel")}>
                    <SvgIcon className="aside-item__icon" Icon={ChannelIcon}/>
                    <span className="aside-item__title">{t("My Channel")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("History")}>
                    <SvgIcon className="aside-item__icon" Icon={HistoryIcon}/>
                    <span className="aside-item__title">{t("History")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("Your Videos")}>
                    <SvgIcon className="aside-item__icon" Icon={PlayVideoIcon}/>
                    <span className="aside-item__title">{t("Your Videos")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("Watch Later")}>
                    <SvgIcon className="aside-item__icon" Icon={ClocksIcon}/>
                    <span className="aside-item__title">{t("Watch Later")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("Liked")}>
                    <SvgIcon className="aside-item__icon" Icon={LikeIcon}/>
                    <span className="aside-item__title">{t("Liked")}</span>
                </VerticalListItem>
                {playlists.map(({title, href}) => <VerticalListItem className="aside-item" title={title}>
                    <a href={href}>
                        <SvgIcon className="aside-item__icon" Icon={PlaylistIcon}/>
                        <span className="aside-item__title">{title}</span>
                    </a>
                </VerticalListItem>)}

                {isUserArticleExpanded
                    ? <VerticalListItem className="aside-item" title={t("Collapse")}
                                        onClick={() => setIsUserArticleExpanded(!isUserArticleExpanded)}>
                        <SvgIcon className="aside-item__icon collapse-icon" Icon={ArrowIcon}/>
                        <span className="aside-item__title">{t("Collapse")}</span>
                    </VerticalListItem>
                    : <VerticalListItem className="aside-item" title={t("Expand")}
                                        onClick={() => setIsUserArticleExpanded(!isUserArticleExpanded)}>
                        <SvgIcon className="aside-item__icon expand-icon" Icon={ArrowIcon}/>
                        <span className="aside-item__title">{t("Expand")}</span>
                    </VerticalListItem>
                }

            </NewVerticalList>
            <NewVerticalList
                className={`aside-article subscriptions${isSubscriptionArticleExpanded ? " " + "expanded" : ""}`}>
                <span title={t("Subscriptions")} className="aside-item__title article-title">{t("Subscriptions")}</span>


                {subscriptions.map(({title, icon, isNewVideo, isStream}) =>
                    <VerticalListItem className="aside-item subscription" title={title}>
                        <Icon className="aside-item__icon" icon={icon}/>
                        <span className="aside-item__title">{title}</span>
                    </VerticalListItem>)}

                {isSubscriptionArticleExpanded
                    ? <VerticalListItem className="aside-item" title={t("Collapse")}
                                        onClick={() => setIsSubscriptionArticleExpanded(!isSubscriptionArticleExpanded)}>
                        <SvgIcon className="aside-item__icon collapse-icon" Icon={ArrowIcon}/>
                        <span className="aside-item__title">{t("Collapse")}</span>
                    </VerticalListItem>
                    : <VerticalListItem className="aside-item" title={expandButtonTitle}
                                        onClick={() => setIsSubscriptionArticleExpanded(!isSubscriptionArticleExpanded)}>
                        <SvgIcon className="aside-item__icon expand-icon" Icon={ArrowIcon}/>
                        <span className="aside-item__title">{expandButtonTitle}</span>
                    </VerticalListItem>
                }
            </NewVerticalList>
            <NewVerticalList
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
            <NewVerticalList
                className="aside-article">
                <span title={t("More From YouTube")}
                      className="aside-item__title article-title">{t("More From YouTube")}</span>
                <VerticalListItem className="aside-item" title={t("YouTube Premium")}>
                    <SvgIcon className="aside-item__icon" Icon={YoutubeIcon}/>
                    <span className="aside-item__title">{t("YouTube Premium")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("YouTube Studio")}>
                    <SvgIcon className="aside-item__icon" Icon={YoutubeCreatorStudioIcon}/>
                    <span className="aside-item__title">{t("YouTube Studio")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("YouTube Music")}>
                    <SvgIcon className="aside-item__icon" Icon={YoutubeMusicIcon}/>
                    <span className="aside-item__title">{t("YouTube Music")}</span>
                </VerticalListItem>
                <VerticalListItem className="aside-item" title={t("YouTube Kids")}>
                    <SvgIcon className="aside-item__icon" Icon={YoutubeForKids}/>
                    <span className="aside-item__title">{t("YouTube Kids")}</span>
                </VerticalListItem>
            </NewVerticalList>
            <NewVerticalList className="aside-article">
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
            <div className="guide-links">
                <a href="" className="guide-links__item">{t("About")}</a>
                <a href="" className="guide-links__item">{t("Press")}</a>
                <a href="" className="guide-links__item">{t("Copyright")}</a>
                <a href="" className="guide-links__item">{t("Contact Us")}</a>
                <a href="" className="guide-links__item">{t("Creator")}</a>
                <a href="" className="guide-links__item">{t("Advertise")}</a>
                <a href="" className="guide-links__item">{t("Developers")}</a>
                <div className="guide-links__space"></div>
                <a href="" className="guide-links__item">{t("Terms")}</a>
                <a href="" className="guide-links__item">{t("Privacy")}</a>
                <a href="" className="guide-links__item">{t("Policy And Safety")}</a>
                <a href="" className="guide-links__item">{t("How YouTube Works")}</a>
                <a href="" className="guide-links__item">{t("Test New Feature")}</a>


            </div>
            <span className="copyright">© 2024 Google LLC</span>
        </aside>
    }
})
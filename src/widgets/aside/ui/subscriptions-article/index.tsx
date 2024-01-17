import "./styles.scss";
import {NewVerticalList} from "../../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../../shared/ui/new-vertical-list/vertical-list-item";
import {Icon} from "../../../../shared/ui/icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {ArrowIcon} from "../../../../images/arrow-icon";
import {userState} from "../../../../entities/user";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";

type PropsType = {}

export function SubscriptionsArticle({}: PropsType) {
    const {t} = useTranslation();

    useEffect(() => {
        userState.loadSubscriptions();
    }, [])

    const {subscriptions} = userState;
    const [isSubscriptionArticleExpanded, setIsSubscriptionArticleExpanded] = useState<boolean>(false);
    const expandButtonTitle = t("Show More Channels", {channelCount: subscriptions.length - 7});

    if (subscriptions.length === 0) {
        return <></>
    }

    return <NewVerticalList
        className={`aside-article subscriptions${isSubscriptionArticleExpanded ? " " + "expanded" : ""}`}>
        <span title={t("Subscriptions")} className="aside-item__title article-title">{t("Subscriptions")}</span>

        {subscriptions.map(({title, icon, isNewVideo, isStream}) =>
            <VerticalListItem className="aside-item subscription" title={title}>
                <Icon className="aside-item__icon" icon={icon}/>
                <span className="aside-item__title">{title}</span>
            </VerticalListItem>)
        }

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

}
import "./styles.scss";
import {NewVerticalList} from "../../../../shared/ui/new-vertical-list";
import {VerticalListItem} from "../../../../shared/ui/new-vertical-list/vertical-list-item";
import {Icon} from "../../../../shared/ui/icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {ArrowIcon} from "../../../../images/arrow-icon";
import {userState} from "../../../../entities/user";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {observer} from "mobx-react";
import {SubscriptionCard} from "../../../../entities/subscription";
import {ExpandButton} from "../expand-button";


export const SubscriptionsArticle = observer(() => {
    const {t} = useTranslation();

    useEffect(() => {
        userState.loadSubscriptions();
    }, [])

    const {subscriptions} = userState;
    const [isSubscriptionArticleExpanded, setIsSubscriptionArticleExpanded] = useState<boolean>(false);

    if (subscriptions.length === 0) {
        return <></>
    }

    return <NewVerticalList
        className={`aside-article subscriptions${isSubscriptionArticleExpanded ? " " + "expanded" : ""}`}>
        <span className="aside-item__title article-title" title={t("Subscriptions")}>{t("Subscriptions")}</span>

        {subscriptions.map((subscription) => <SubscriptionCard subscription={subscription}/>)}

        <ExpandButton title={isSubscriptionArticleExpanded ? t("Collapse") : t("Show More Channels", {channelCount: subscriptions.length - 7})}
                      onClick={() => setIsSubscriptionArticleExpanded(!isSubscriptionArticleExpanded)}
                      isExpanded={isSubscriptionArticleExpanded}/>
    </NewVerticalList>
})
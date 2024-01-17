import "./styles.scss";
import {Icon} from "../../../shared/ui/icon";
import {VerticalListItem} from "../../../shared/ui/new-vertical-list/vertical-list-item";
import {SubscriptionType} from "../../../shared/api/types/subscription-type";

type PropsType = {
    subscription: SubscriptionType
};

export function SubscriptionCard({subscription: {title, icon, isNewVideo, isStream}}: PropsType) {
    return <VerticalListItem className="aside-item subscription" title={title}>
        <Icon className="aside-item__icon" icon={icon}/>
        <span className="aside-item__title">{title}</span>
    </VerticalListItem>
}
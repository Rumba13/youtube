import './styles.scss';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { SubscriptionCard, subscriptionsState } from '../../../../entities/subscription';
import { ExpandButton } from '../expand-button';
import { userState } from '../../../../entities/user';

export const SubscriptionsArticle = observer(() => {
 const { t } = useTranslation();
 const { subscriptions } = subscriptionsState;
 const [isSubscriptionArticleExpanded, setIsSubscriptionArticleExpanded] = useState<boolean>(false);
 const { getUserJwt, user } = userState;
 const userJwt = getUserJwt();

 useEffect(() => {
  user && subscriptionsState.loadSubscriptions(userJwt);
 }, [userJwt]);

 if (subscriptions.length === 0) {
  return <></>;
 }

 return (
  <ul className={`aside-article subscriptions${isSubscriptionArticleExpanded ? ' ' + 'expanded' : ''}`}>
   <span className="aside-item__title article-title" title={t('Subscriptions')}>
    {t('Subscriptions')}
   </span>

   {subscriptions.map((subscription, index) => (
    <SubscriptionCard subscription={subscription} key={index} />
   ))}

   <ExpandButton
    title={
     isSubscriptionArticleExpanded ? t('Collapse') : t('Show More Channels', { channelCount: subscriptions.length - 7 })
    }
    onClick={() => setIsSubscriptionArticleExpanded(!isSubscriptionArticleExpanded)}
    isExpanded={isSubscriptionArticleExpanded}
   />
  </ul>
 );
});

import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { HomeIcon } from '../../../../images/home-icon';
import { ShortsIcon } from '../../../../images/shorts-icon';
import { SubscriptionsIcon } from '../../../../images/subscriptions-icon';
import { useTranslation } from 'react-i18next';

export function MainArticle() {
 const { t } = useTranslation();

 const items: JSX.Element[] = [
  <li className="aside-item active" title={t('Home')} key={1}>
   <SvgIcon className="aside-item__icon" Icon={HomeIcon} />
   <span className="aside-item__title">{t('Home')}</span>
  </li>,
  <li className="aside-item" title={t('Shorts')} key={2}>
   <SvgIcon className="aside-item__icon" Icon={ShortsIcon} />
   <span className="aside-item__title">{t('Shorts')}</span>
  </li>,
  <li className="aside-item" title={t('Subscriptions')} key={3}>
   <SvgIcon className="aside-item__icon" Icon={SubscriptionsIcon} />
   <span className="aside-item__title">{t('Subscriptions')}</span>
  </li>,
 ];

 return <ul className="aside-article main-article">{items.map(item => item)}</ul>;
}

import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import TrendingIcon from '../../../../assets/images/trending-icon.svg';
import MusicIcon from '../../../../assets/images/music-icon.svg';
import GamingIcon from '../../../../assets/images/gaming-icon.svg';
import SportIcon from '../../../../assets/images/sport-icon.svg';
import { useTranslation } from 'react-i18next';

export function NavigationArticle() {
 const { t } = useTranslation();

 const items: JSX.Element[] = [
  <li className="aside-item" title={t('Trending')} key={1}>
   <SvgIcon className="aside-item__icon" icon={TrendingIcon} />
   <span className="aside-item__title">{t('Trending')}</span>
  </li>,
  <li className="aside-item" title={t('Music')} key={2}>
   <SvgIcon className="aside-item__icon" icon={MusicIcon} />
   <span className="aside-item__title">{t('Music')}</span>
  </li>,
  <li className="aside-item" title={t('Gaming')} key={3}>
   <SvgIcon className="aside-item__icon" icon={GamingIcon} />
   <span className="aside-item__title">{t('Gaming')}</span>
  </li>,
  <li className="aside-item" title={t('Sport')} key={4}>
   <SvgIcon className="aside-item__icon" icon={SportIcon} />
   <span className="aside-item__title">{t('Sport')}</span>
  </li>,
 ];

 return (
  <ul className="aside-article navigation">
   <span title={t('Subscriptions')} className="aside-item__title article-title">
    {t('Explore')}
   </span>
   {items.map(item => item)}
  </ul>
 );
}

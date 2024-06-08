import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { TrendingIcon } from '../../../../images/trending-icon';
import { MusicIcon } from '../../../../images/music-icon';
import { GamingIcon } from '../../../../images/gaming-icon';
import { SportIcon } from '../../../../images/sport-icon';
import { useTranslation } from 'react-i18next';

export function NavigationArticle() {
 const { t } = useTranslation();

 const items: JSX.Element[] = [
  <li className="aside-item" title={t('Trending')} key={1}>
   <SvgIcon className="aside-item__icon" Icon={TrendingIcon} />
   <span className="aside-item__title">{t('Trending')}</span>
  </li>,
  <li className="aside-item" title={t('Music')} key={2}>
   <SvgIcon className="aside-item__icon" Icon={MusicIcon} />
   <span className="aside-item__title">{t('Music')}</span>
  </li>,
  <li className="aside-item" title={t('Gaming')} key={3}>
   <SvgIcon className="aside-item__icon" Icon={GamingIcon} />
   <span className="aside-item__title">{t('Gaming')}</span>
  </li>,
  <li className="aside-item" title={t('Sport')} key={4}>
   <SvgIcon className="aside-item__icon" Icon={SportIcon} />
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

import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import HomeIcon from '../../../../assets/images/home-icon.svg';
import ShortsIcon from '../../../../assets/images/shorts-icon.svg';
import SubscriptionsIcon from '../../../../assets/images/subscriptions-icon.svg';
import YouIcon from '../../../../assets/images/you-icon.svg';
import { useTranslation } from 'react-i18next';

export function AsideMini() {
  const { t } = useTranslation();

  const items: JSX.Element[] = [
    <li className="aside-item active" title={t('Home')} key={1}>
      <SvgIcon className="aside-item__icon" icon={HomeIcon} />
      <span className="aside-item__title">{t('Home')}</span>
    </li>,
    <li className="aside-item" title={t('Shorts')} key={2}>
      <SvgIcon className="aside-item__icon" icon={ShortsIcon} />
      <span className="aside-item__title">{t('Shorts')}</span>
    </li>,
    <li className="aside-item" title={t('Subscriptions')} key={3}>
      <SvgIcon className="aside-item__icon" icon={SubscriptionsIcon} />
      <span className="aside-item__title">{t('Subscriptions')}</span>
    </li>,
    <li className="aside-item" title={t('You')} key={4}>
      <SvgIcon className="aside-item__icon" icon={YouIcon} />
      <span className="aside-item__title">{t('You')}</span>
    </li>,
  ];

  return <ul className="aside-mini">{items.map(item => item)}</ul>;
}

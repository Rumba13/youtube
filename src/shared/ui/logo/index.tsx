import './styles.scss';
import { useTranslation } from 'react-i18next';
import LogoIcon from '../../../assets/images/logo-icon.svg';
import { SvgIcon } from '../svg-icon';

export function Logo() { //TODO move to entities
 const { i18n, t } = useTranslation();

 return (
  <div className="logo" title={t('YouTube Main Page')} aria-label={t('YouTube Main Page')}>
   <SvgIcon asImage icon={LogoIcon} />
   <span className="country-code">{i18n.language.toUpperCase()}</span>
  </div>
 );
}

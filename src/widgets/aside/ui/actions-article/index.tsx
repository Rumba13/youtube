import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import GearIcon from '../../../../assets/images/gear-icon.svg';
import FlagIcon from '../../../../assets/images/flag-icon.svg';
import QuestionIcon from '../../../../assets/images/question-icon.svg';
import DialogIcon from '../../../../assets/images/dialog-icon.svg';
import { useTranslation } from 'react-i18next';

export function ActionsArticle() {
 const { t } = useTranslation();

 const items: JSX.Element[] = [
  <li className="aside-item" title={t('Settings')} key={1}>
   <SvgIcon className="aside-item__icon" icon={GearIcon} />
   <span className="aside-item__title">{t('Settings')}</span>
  </li>,
  <li className="aside-item" title={t('Report History')} key={2}>
   <SvgIcon className="aside-item__icon" icon={FlagIcon} />
   <span className="aside-item__title">{t('Report History')}</span>
  </li>,
  <li className="aside-item" title={t('Inquiry')} key={3}>
   <SvgIcon className="aside-item__icon" icon={QuestionIcon} />
   <span className="aside-item__title">{t('Inquiry')}</span>
  </li>,
  <li className="aside-item" title={t('Send Review')} key={4}>
   <SvgIcon className="aside-item__icon" icon={DialogIcon} />
   <span className="aside-item__title">{t('Send Review')}</span>
  </li>,
 ];

 return <ul className="aside-article actions-article">{items.map(item => item)}</ul>;
}

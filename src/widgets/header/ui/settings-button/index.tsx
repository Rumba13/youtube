import './styles.scss';
import { TextTip } from '../../../../shared/ui/text-tip';
import { Button } from '../../../../shared/ui/button';
import { GearIcon } from '../../../../images/svg/gear-icon';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import { useTranslation } from 'react-i18next';

export function SettingsButton() {
 const { t } = useTranslation();

 return (
  <Button className="gear-button" ariaLabel={t('Settings')}>
   <SvgIcon className="gear-button__icon" Icon={GearIcon} />
   <TextTip>{t('Settings')}</TextTip>
  </Button>
 );
}

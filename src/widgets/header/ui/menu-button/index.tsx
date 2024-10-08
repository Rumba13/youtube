import './styles.scss';
import { TextTip } from '../../../../shared/ui/text-tip';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import MenuIcon from '../../../../assets/images/menu-icon.svg';
import { asideStore } from '../../../aside';
import { observer } from 'mobx-react';

export const MenuButton = observer(() => {
  const { t } = useTranslation();
  const { isMinified, setIsMinified } = asideStore;

  return (
    <Button className="menu-button" onClick={() => setIsMinified(!isMinified)} ariaLabel={t('Open Menu')}>
      <SvgIcon className="menu-button__icon" icon={MenuIcon} />
      <TextTip>{t('VladIsAssHole')}</TextTip>
    </Button>
  );
});

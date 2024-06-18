import './styles.scss';
import { SearchIcon } from '../../../../images/search-icon';
import { TextTip } from '../../../../shared/ui/text-tip';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';

type PropsType = {
 disabled?: boolean;
 buttonType: 'submit' | 'reset' | 'button' | undefined;
 type: 'mini' | 'normal';
 onClick?: React.MouseEventHandler;
};

export function SearchButton({ buttonType, type, disabled = false, onClick }: PropsType) {
 const { t } = useTranslation();

 if (type === 'normal') {
  return (
   <button
    className="search-icon-button"
    aria-label={t('Search')}
    disabled={disabled}
    onClick={onClick}
    type={buttonType}>
    <SvgIcon className="search-icon-button__icon" Icon={SearchIcon} />
    <TextTip>{t('Enter Search')}</TextTip>
   </button>
  );
 } else {
  return (
   <Button className="search-button-mini" onClick={onClick}>
    <SvgIcon className="search-button-mini__icon" Icon={SearchIcon} />
    <TextTip>{t('Enter Search')}</TextTip>
   </Button>
  );
 }
}

import './styles.scss';
import { TextTip } from '../../../../shared/ui/text-tip';
import React from 'react';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import ArrowLeftIcon from '../../../../assets/images/arrow-left-icon.svg';
import { useTranslation } from 'react-i18next';

type PropsType = {
 onClick?: React.MouseEventHandler;
};

export function BackButton({ onClick }: PropsType) {
 const { t } = useTranslation();

 return (
  <button className="back-button" onClick={onClick} aria-label={t('Back')}>
   <div className="back-button__interaction"></div>
   <SvgIcon className="back-button__icon" icon={ArrowLeftIcon} />
   <TextTip>{t('Back')}</TextTip>
  </button>
 );
}

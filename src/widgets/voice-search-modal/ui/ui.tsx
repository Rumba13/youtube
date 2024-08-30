import './styles.scss';
import { CrossIcon } from '../../../features/search/ui/cross-icon';
import { VoiceSearchButton } from '../../../features/search/ui/voice-search-icon';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import clsx from 'clsx';

type PropsType = {
 isOpened: boolean;
 setIsOpened: (value: boolean) => void;
};

export type VoiceSearchModalSlotType = FC<PropsType>;

export function VoiceSearchModal({ isOpened, setIsOpened }: PropsType) {
 const { t } = useTranslation();

 return (
  <div className={clsx('voice-search-modal', isOpened && 'opened')}>
   <div className="voice-search-modal-container">
    <CrossIcon className="voice-search-modal__cross" onClick={() => setIsOpened(false)} />
    <span className="voice-search-modal__title">{t('Voice Search')}</span>
    <span className="voice-search-modal__content">{t('To Use Voice Search')}</span>
    <VoiceSearchButton />
   </div>
  </div>
 );

 //TODO add pulse component in future
}

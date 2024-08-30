import './styles.scss';
import { TextTip } from '../../../../shared/ui/text-tip';
import  CreateVideoActiveIcon  from '../../../../images/create-video-active-icon.svg';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import CreateVideoIcon from '../../../../images/create-video-icon.svg';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../shared/ui/button';
import { useModal } from '../../../../shared/lib/use-modal';
import { CreateVideoActionsModalSlotType } from '../../../create-video-actions-modal';

type PropsType = {
 ModalSlot: CreateVideoActionsModalSlotType;
};

export function CreateVideoButton({ ModalSlot }: PropsType) {
 const { t } = useTranslation();
 const { isModalOpened, toggleModal, stopPropagationInModal } = useModal();

 return (
  <Button className="create-video-button" onClick={toggleModal} ariaLabel={t('Open Create Video Menu')}>
   <SvgIcon className="create-video-button__icon" icon={isModalOpened ? CreateVideoActiveIcon : CreateVideoIcon} />
   <ModalSlot onClick={stopPropagationInModal} isOpened={isModalOpened} />
   <TextTip>{t('Create')}</TextTip>
  </Button>
 );
}

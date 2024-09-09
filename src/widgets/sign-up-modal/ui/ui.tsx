import './styles.scss';
import clsx from 'clsx';
import { SignUpFormSlotType } from '../../sign-up-form/ui/ui';
import { useModal } from '../../../shared/lib/use-modal';
import { signUpStore } from '../model/sign-up-store';
import { observer } from 'mobx-react';

type PropsType = {
 SignUpFormSlot: SignUpFormSlotType;
};

export const SignUpModal = observer(({ SignUpFormSlot }: PropsType) => {
 const {
  isModalOpened,
  toggleModal,
  stopPropagationInModal,
 } = useModal(false, { parentModalSelector: '.user-actions-modal' });
 signUpStore.setToggleModal(toggleModal);

 return (
  <div className={clsx('sign-up-modal', isModalOpened && 'opened')} onClick={stopPropagationInModal}>
   <SignUpFormSlot />
  </div>
 );
});

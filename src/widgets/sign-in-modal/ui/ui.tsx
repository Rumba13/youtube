import './styles.scss';
import { FC } from 'react';
import clsx from 'clsx';
import { SignInFormSlot } from '../../sign-in-form';
import { useModal } from '../../../shared/lib/use-modal';
import { signInStore } from '../model/sign-in-store';
import { observer } from 'mobx-react';

export type LoginModalSlotType = FC<PropsType>;

type PropsType = {
 SignInFormSlot: SignInFormSlot;
};

export const SignInModal = observer(({  SignInFormSlot }: PropsType) => {
 const {
  isModalOpened,
  toggleModal,
  stopPropagationInModal
 } = useModal(false, { parentModalSelector: '.user-actions-modal' });

 signInStore.setToggleModal(toggleModal);

 return (
  <div className={clsx('login-modal', isModalOpened && 'opened')} onClick={stopPropagationInModal}>
   <SignInFormSlot />
  </div>
 );
});

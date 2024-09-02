import './styles.scss';
import { FC, MouseEventHandler } from 'react';
import clsx from 'clsx';
import { SignInFormSlot } from '../../sign-in-form';

export type LoginModalSlotType = FC<PropsType>;

type PropsType = {
 isOpened: boolean;
 onClick?: MouseEventHandler;
 SignInFormSlot: SignInFormSlot;
};

export function SignInModal({ isOpened, onClick, SignInFormSlot }: PropsType) {
 //separate login form from modal
 return (
  <div className={clsx('login-modal', isOpened && 'opened')} onClick={onClick}>
   <SignInFormSlot />
  </div>
 );
}

import './styles.scss';
import { FC, MouseEventHandler } from 'react';
import { LoginFormSlotType } from '../../login-form';
import clsx from 'clsx';

export type LoginModalSlotType = FC<PropsType>;

type PropsType = {
 isOpened: boolean;
 onClick?: MouseEventHandler;
 LoginFormSlot: LoginFormSlotType;
};

export function LoginModal({ isOpened, onClick, LoginFormSlot }: PropsType) {
 //separate login form from modal
 return (
  <div className={clsx('login-modal', isOpened && 'opened')} onClick={onClick}>
   <LoginFormSlot />
  </div>
 );
}

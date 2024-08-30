import './styles.scss';
import { MouseEventHandler } from 'react';
import { RegisterFormSlotType } from '../../register-form/ui/ui';
import clsx from 'clsx';

type PropsType = {
 isOpened: boolean;
 onClick?: MouseEventHandler;
 RegisterFormSlot: RegisterFormSlotType;
};

export function RegisterModal({ isOpened, onClick, RegisterFormSlot }: PropsType) {
 return (
  <div className={clsx('register-modal', isOpened && 'opened')} onClick={onClick}>
   <RegisterFormSlot />
  </div>
 );
}

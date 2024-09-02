import './styles.scss';
import { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { SignUpFormSlotType } from '../../sign-up-form/ui/ui';

type PropsType = {
 isOpened: boolean;
 onClick?: MouseEventHandler;
 SignUpFormSlot: SignUpFormSlotType;
};

export function SignUpModal({ isOpened, onClick, SignUpFormSlot }: PropsType) {
 return (
  <div className={clsx('sign-up-modal', isOpened && 'opened')} onClick={onClick}>
   <SignUpFormSlot />
  </div>
 );
}

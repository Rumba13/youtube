import { MouseEventHandler } from 'react';

export type ModalProps = {
  className?: string;
  onClick?: MouseEventHandler;
  isOpened: boolean;
};

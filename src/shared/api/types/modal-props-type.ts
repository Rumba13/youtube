import { FC, MouseEventHandler } from 'react';

export type ModalPropsType = {
  className?: string;
  onClick?: MouseEventHandler;
  isOpened: boolean;
};

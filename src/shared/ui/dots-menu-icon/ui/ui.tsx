import './styles.scss';
import React, { MouseEventHandler } from 'react';
import { Button } from '../../button';
import { ModalSlotType } from '../../../api/types/modal-slot-type';

type PropsType = {
 ModalSlot: ModalSlotType;
 isOpened?: boolean;
 isModalOpened: boolean;
 onClick?: MouseEventHandler;
 onModalClick?: MouseEventHandler;
};

export function DotsButton({ ModalSlot, isOpened = false, onClick, onModalClick, isModalOpened }: PropsType) {
 return (
  <Button className={`dots-button${isOpened ? ' opened' : ''}`} onClick={onClick} withAnimation={false}>
   <svg
    className="dots-button__icon"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false">
    <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
   </svg>
   <ModalSlot isOpened={isModalOpened} onClick={onModalClick} />
  </Button>
 );
}

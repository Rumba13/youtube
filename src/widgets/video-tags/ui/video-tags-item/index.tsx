import './styles.scss';
import { MouseEventHandler } from 'react';
import clsx from 'clsx';

type PropsType = {
 children: string;
 isActive: boolean;
 onClick?: MouseEventHandler;
};

export function VideoTagsItem({ children, isActive, onClick }: PropsType) {
 return (
  <li className={clsx('video-tags-item', isActive && 'active')} onClick={onClick}>
   {children}
  </li>
 );
}

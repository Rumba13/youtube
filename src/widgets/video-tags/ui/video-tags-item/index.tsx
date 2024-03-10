import './styles.scss';
import { MouseEventHandler } from 'react';

type PropsType = {
  children: string;
  isActive: boolean;
  onClick?: MouseEventHandler;
};

export function VideoTagsItem({ children, isActive, onClick }: PropsType) {
  return (
    <li className={`video-tags-item${isActive ? ' active' : ''}`} onClick={onClick}>
      {children}
    </li>
  );
}

import './styles.scss';
import { MouseEventHandler } from 'react';

type PropsType = {
 onClick?: MouseEventHandler<HTMLDivElement>;
 className?: string;
};

export function CrossIcon({ className, onClick }: PropsType) {
 return (
  <div className={`cross-icon ${className ? className : ''}`}>
   <div onClick={onClick} className="cross-icon__interaction"></div>
   <svg
    className="cross-icon__icon"
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    focusable="false">
    <path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path>
   </svg>
  </div>
 );
}

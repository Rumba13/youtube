import './styles.scss';
import { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

type PropsType = {
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler;
  withAnimation?: boolean;
  ariaLabel?: string;
};

//TODO add tag button to all places where it needs
export function Button({ className, children, onClick, withAnimation = true, ariaLabel }: PropsType) {
  return (
    <button
      className={clsx('button', className, withAnimation && 'with-animation')}
      onClick={onClick}
      aria-label={ariaLabel}>
      <div className="button__interaction" aria-hidden></div>
      {children}
    </button>
  );
}

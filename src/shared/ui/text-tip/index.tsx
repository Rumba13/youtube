import './styles.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

type PropsType = {
  className?: string;
  children: ReactNode | ReactNode[];
};

export function TextTip({ className, children }: PropsType) {
  return <div className={clsx('text-tip', className)}>{children}</div>;
}

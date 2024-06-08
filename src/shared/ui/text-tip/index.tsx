import './styles.scss';
import { ReactNode } from 'react';

type PropsType = {
 className?: string;
 children: ReactNode | ReactNode[];
};

export function TextTip({ className, children }: PropsType) {
 return <div className={`text-tip${className ? ' ' + className : ''}`}>{children}</div>;
}

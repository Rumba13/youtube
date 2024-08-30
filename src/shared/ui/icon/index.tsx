import './styles.scss';
import clsx from 'clsx';

type PropsType = {
 className?: string;
 icon: string;
 alt?: string;
 width?: number;
 height?: number;
};

export function Icon({ icon, alt = '', className }: PropsType) {
 return <img className={clsx('icon', className)} src={icon} alt={alt} />;
}

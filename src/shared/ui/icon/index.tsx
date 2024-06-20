import './styles.scss';

type PropsType = {
 className?: string;
 icon: string;
 alt?: string;
 width?: number;
 height?: number;
};

export function Icon({ icon, alt = '', className = '' }: PropsType) {
 return <img className={`icon${className ? ' ' + className : ''}`} src={icon} alt={alt} />;
}

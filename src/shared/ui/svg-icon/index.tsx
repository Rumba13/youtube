import './styles.scss';
import clsx from 'clsx';

type PropsType = {
 className?: string;
 icon: any;
 asImage?: boolean
};

export function SvgIcon({ icon, className, asImage = false }: PropsType) {

 if (asImage) {
  return (
   <img className={clsx('svg-icon', className)} src={icon} style={{ backgroundColor: 'transparent' }}
        alt="" />
  );
 }

 return (
  <div
   className={clsx('svg-icon', className)}
   style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
  />
 );
}

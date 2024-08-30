import './styles.scss';

type PropsType = {
 className?: string;
 icon: any;
 asImage?: boolean
};

export function SvgIcon({ icon, className, asImage = false }: PropsType) {

 if (asImage) {
  return (
   <img className={`svg-icon${className ? ' ' + className : ''}`} src={icon} style={{ backgroundColor: 'transparent' }}
        alt="" />
  );
 }

 return (
  <div
   className={`svg-icon${className ? ' ' + className : ''}`}
   style={{ maskImage: `url(${icon})`, WebkitMaskImage: `url(${icon})` }}
  />
 );
}

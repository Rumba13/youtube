import './styles.scss';
import { SvgIcon } from '../../../../shared/ui/svg-icon';
import ArrowIcon from '../../../../assets/images/arrow-icon.svg';
import { MouseEventHandler } from 'react';
import clsx from 'clsx';

type PropsType = {
 title: string;
 isExpanded: boolean;
 onClick?: MouseEventHandler;
};

export function ExpandButton({ title, isExpanded, onClick }: PropsType) {
 return (
  <li className="aside-item" title={title} onClick={onClick}>
   <SvgIcon className={clsx('aside-item__icon', isExpanded ? 'collapse-icon' : 'expand-icon')} icon={ArrowIcon} />
   <span className="aside-item__title">{title}</span>
  </li>
 );
}

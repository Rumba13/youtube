import './styles.scss';
import { observer } from 'mobx-react';
import { overlayState } from '../model/model';
import clsx from 'clsx';

export const Overlay = observer(() => {
 return <div className={clsx('overlay', overlayState.isOverlayOpened && 'opened')}></div>;
});

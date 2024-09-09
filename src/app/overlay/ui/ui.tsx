import './styles.scss';
import { observer } from 'mobx-react';
import { overlayStore } from '../model/model';
import clsx from 'clsx';

export const Overlay = observer(() => {
  return <div className={clsx('overlay', overlayStore.isOverlayOpened && 'opened')}></div>;
});

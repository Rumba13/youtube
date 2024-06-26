import './styles.scss';
import React, { MouseEventHandler } from 'react';
import { SvgIcon } from '../../../shared/ui/svg-icon';
import { ClocksIcon } from '../../../images/clocks-icon';
import { AddToOrderQueueIcon } from '../../../images/add-to-order-queue-icon';
import { AddToPlaylistIcon } from '../../../images/add-to-playlist-icon';
import { DownloadIcon } from '../../../images/download-icon';
import { ShareIcon } from '../../../images/share-icon';
import { CrossedCircleIcon } from '../../../images/crossed-circle-icon';
import { StopIcon } from '../../../images/stop-icon';
import { FlagIcon } from '../../../images/flag-icon';
import { ListItemSeparator } from '../../../shared/ui/list-item-separator';

type PropsType = {
 isOpened: boolean;
 onClick?: MouseEventHandler;
};

export type VideoActionsModalSlotType = React.FC<PropsType>;

export function VideoActionsList({ isOpened, onClick }: PropsType) {
 const items: JSX.Element[] = [
  <div className="item-wrapper" key={1}>
   <SvgIcon Icon={AddToOrderQueueIcon} />
   <span className="item__title">Добавить в очередь</span>
  </div>,
  <div className="item-wrapper" key={2}>
   <SvgIcon Icon={ClocksIcon} />
   <span className="item__title">Смотреть позже</span>
  </div>,
  <div className="item-wrapper" key={3}>
   <SvgIcon Icon={AddToPlaylistIcon} />
   <span className="item__title">Добавить в плейлист</span>
  </div>,
  <div className="item-wrapper" key={4}>
   <SvgIcon Icon={DownloadIcon} />
   <span className="item__title">Скачать</span>
  </div>,
  <div className="item-wrapper" key={5}>
   <SvgIcon Icon={ShareIcon} />
   <span className="item__title">Поделиться</span>
  </div>,
  <ListItemSeparator key={6} />,
  <div className="item-wrapper" key={7}>
   <SvgIcon Icon={CrossedCircleIcon} />
   <span className="item__title">Не интересует</span>
  </div>,
  <div className="item-wrapper" key={8}>
   <SvgIcon Icon={StopIcon} />
   <span className="item__title">Не рекомендовать видео с этого канала</span>
  </div>,
  <div className="item-wrapper" key={9}>
   <SvgIcon Icon={FlagIcon} />
   <span className="item__title">Пожаловаться</span>
  </div>,
 ];

 return (
  <div className={'video-actions-list' + (isOpened ? ' opened' : '')} onClick={onClick}>
   {items.map((item, index) => (
    <li className="video-actions-list__item" key={index}>
     {item}
    </li>
   ))}
  </div>
 );
}

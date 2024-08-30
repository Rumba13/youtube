import './styles.scss';
import React, { MouseEventHandler } from 'react';
import { SvgIcon } from '../../../shared/ui/svg-icon';
import ClocksIcon from '../../../images/clocks-icon.svg';
import AddToOrderQueueIcon from '../../../images/add-to-order-queue-icon.svg';
import AddToPlaylistIcon from '../../../images/add-to-playlist-icon.svg';
import DownloadIcon from '../../../images/download-icon.svg';
import ShareIcon from '../../../images/share-icon.svg';
import CrossedCircleIcon from '../../../images/crossed-circle-icon.svg';
import StopIcon from '../../../images/stop-icon.svg';
import FlagIcon from '../../../images/flag-icon.svg';
import { ListItemSeparator } from '../../../shared/ui/list-item-separator';
import { useTranslation } from 'react-i18next';

type PropsType = {
 isOpened: boolean;
 onClick?: MouseEventHandler;
};

export type VideoActionsModalSlotType = React.FC<PropsType>;

export function VideoActionsList({ isOpened, onClick }: PropsType) {
 const { t } = useTranslation();

 const items: JSX.Element[] = [
  <div className="item-wrapper" key={1}>
   <SvgIcon icon={AddToOrderQueueIcon} />
   <span className="item__title">Добавить в очередь</span>
  </div>,
  <div className="item-wrapper" key={2}>
   <SvgIcon icon={ClocksIcon} />
   <span className="item__title">Смотреть позже</span>
  </div>,
  <div className="item-wrapper" key={3}>
   <SvgIcon icon={AddToPlaylistIcon} />
   <span className="item__title">Добавить в плейлист</span>
  </div>,
  <div className="item-wrapper" key={4}>
   <SvgIcon icon={DownloadIcon} />
   <span className="item__title">Скачать</span>
  </div>,
  <div className="item-wrapper" key={5}>
   <SvgIcon icon={ShareIcon} />
   <span className="item__title">Поделиться</span>
  </div>,
  <ListItemSeparator key={6} />,
  <div className="item-wrapper" key={7}>
   <SvgIcon icon={CrossedCircleIcon} />
   <span className="item__title">Не интересует</span>
  </div>,
  <div className="item-wrapper" key={8}>
   <SvgIcon icon={StopIcon} />
   <span className="item__title">Не рекомендовать видео с этого канала</span>
  </div>,
  <div className="item-wrapper" key={9}>
   <SvgIcon icon={FlagIcon} />
   <span className="item__title">Пожаловаться</span>
  </div>,
 ];

 return (
  <ul className={'video-actions-list' + (isOpened ? ' opened' : '')} onClick={onClick}
      aria-label={t('Actions With User')}>
   {items.map((item, index) => (
    <li className="video-actions-list__item" key={index}>
     {item}
    </li>
   ))}
  </ul>
 );
}

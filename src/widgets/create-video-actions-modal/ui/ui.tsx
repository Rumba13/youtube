import './styles.scss';
import React, { FC, MouseEventHandler } from 'react';
import { SvgIcon } from '../../../shared/ui/svg-icon';
import { PlayVideoIcon } from '../../../images/play-video-icon';
import { StreamIcon } from '../../../images/stream-icon';
import { useTranslation } from 'react-i18next';

type PropsType = {
  isOpened: boolean;
  onClick?: MouseEventHandler;
};

export type CreateVideoActionsModalSlotType = FC<PropsType>;

export function CreateVideoActionsModal({ isOpened, onClick }: PropsType) {
  //TODO refactoring
  const { t } = useTranslation();

  const items: JSX.Element[] = [
    <>
      <SvgIcon Icon={PlayVideoIcon} />
      <a className="item-title" href="https://studio.youtube.com/channel/1/videos">
        {t('Add Video')}
      </a>
    </>,
    <>
      <SvgIcon Icon={StreamIcon} />
      <a className="item-title" href="https://studio.youtube.com/channel/1/livestreaming">
        {t('Start Stream')}
      </a>
    </>,
  ];

  return (
    <ul className={`create-video-actions-modal${isOpened ? ' opened' : ''}`} onClick={onClick}>
      {items.map((item, index) => (
        <li className="create-video-actions-modal__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

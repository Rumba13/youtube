import "./styles.scss";
import React, {FC} from "react";
import {SvgIcon} from "../../../shared/ui/svg-icon";
import {PlayVideoIcon} from "../../../images/play-video-icon";
import {StreamIcon} from "../../../images/stream-icon";
import {VerticalList} from "../../../shared/ui/vertical-list";

type PropsType = {
    isOpened: boolean
}

export type VideoActionsModalSlotType = FC<PropsType>;

export function VideoActionsModal({isOpened}: PropsType) {
    return <VerticalList className={`video-actions-modal${isOpened ? " opened" : ""}`} items={[
        <>
            <SvgIcon className="play-video-icon" Icon={PlayVideoIcon}/>
            <a className="title" href="https://studio.youtube.com/channel/1/videos">
                Добавить видео
            </a>
        </>,
        <>
            <SvgIcon className="stream-icon" Icon={StreamIcon}/>
            <a className="title" href="https://studio.youtube.com/channel/1/livestreaming">
                Начать трансляцию
            </a>
        </>
    ]}/>
}
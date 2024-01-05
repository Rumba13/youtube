import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import {PlayVideoIcon} from "../../../../shared/ui/play-video-icon";
import {StreamIcon} from "../../../../shared/ui/stream-icon";
import React, {useState} from "react";
import {CreateVideoIcon} from "../../../../shared/ui/create-video-icon";
import {CreateVideoActiveIcon} from "../../../../shared/ui/create-video-active-icon";

export function CreateVideoButton() {//feature?
    const [isOptionsOpened, setIsOptionsOpened] = useState<boolean>(false);
    document.addEventListener("click", () => setIsOptionsOpened(false));

    function createVideoButtonOnClickHandler(e: React.MouseEvent) {
        e.stopPropagation();
        setIsOptionsOpened(!isOptionsOpened)
    }


    return <div className="create-video-button" onClick={createVideoButtonOnClickHandler}>
        <div className="create-video-button__interaction"></div>

        {isOptionsOpened
            ? <CreateVideoActiveIcon className="create-video-icon__icon"/>
            : <CreateVideoIcon className="create-video-icon__icon"/>
        }

        <div className={`options ${isOptionsOpened ? "opened" : ""}`}>
            <div className="options-item">
                <PlayVideoIcon/>
                <a className="options-item__title" href="https://studio.youtube.com/channel/1/videos">Добавить видео</a>
            </div>
            <div className="options-item">
                <StreamIcon/>
                <a className="options-item__title" href="https://studio.youtube.com/channel/1/livestreaming">Начать трансляцию</a>
            </div>
        </div>
        <TextTip>Создать</TextTip>
    </div>
}
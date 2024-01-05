import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import React, {useState} from "react";
import {CreateVideoActiveIcon} from "../../../../images/create-video-active-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {StreamIcon} from "../../../../images/stream-icon";
import {PlayVideoIcon} from "../../../../images/play-video-icon";
import {CreateVideoIcon} from "../../../../images/create-video-icon";

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
            ? <SvgIcon className="create-video-icon__icon" Icon={CreateVideoActiveIcon}/>
            : <SvgIcon className="create-video-icon__icon" Icon={CreateVideoIcon}/>
        }

        <div className={`options ${isOptionsOpened ? "opened" : ""}`}>
            <div className="options-item">
                <SvgIcon className="play-video-icon" Icon={PlayVideoIcon}/>
                <a className="options-item__title" href="https://studio.youtube.com/channel/1/videos">Добавить видео</a>
            </div>
            <div className="options-item">
                <SvgIcon className="stream-icon" Icon={StreamIcon}/>
                <a className="options-item__title" href="https://studio.youtube.com/channel/1/livestreaming">Начать
                    трансляцию</a>
            </div>
        </div>
        <TextTip>Создать</TextTip>
    </div>
}
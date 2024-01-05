import "./styles.scss";
import {TextTip} from "../../../../shared/ui/text-tip";
import React, {useState} from "react";
import {CreateVideoActiveIcon} from "../../../../images/create-video-active-icon";
import {SvgIcon} from "../../../../shared/ui/svg-icon";
import {StreamIcon} from "../../../../images/stream-icon";
import {PlayVideoIcon} from "../../../../images/play-video-icon";
import {CreateVideoIcon} from "../../../../images/create-video-icon";
import {VerticalList} from "../../../../shared/ui/vertical-list";

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

        <VerticalList className={isOptionsOpened ? "opened" : ""} listItemClassName="options-item" items={[
            <>
                <SvgIcon className="play-video-icon" Icon={PlayVideoIcon}/>
                <a className="title" href="https://studio.youtube.com/channel/1/videos">Добавить видео</a>
            </>,
            <>
                <SvgIcon className="stream-icon" Icon={StreamIcon}/>
                <a className="title" href="https://studio.youtube.com/channel/1/livestreaming">Начать
                    трансляцию</a>
            </>
        ]}/>
        <TextTip>Создать</TextTip>
    </div>
}
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
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    document.addEventListener("click", () => setIsModalOpened(false));

    function toggleModal(event: React.MouseEvent) {

        if (isModalOpened) {
            event.stopPropagation();
        }
        setTimeout(() => setIsModalOpened(!isModalOpened), 0)
        //Check https://github.com/rumba13/youtube/blob/8815f5abc553dd4303ed999dae3c4871e4219b91/src/widgets/header/ui/notifications-button/index.tsx#L33
    }


    return <div className="create-video-button" onClick={toggleModal}>
        <div className="create-video-button__interaction"></div>

        {isModalOpened
            ? <SvgIcon className="create-video-icon__icon" Icon={CreateVideoActiveIcon}/>
            : <SvgIcon className="create-video-icon__icon" Icon={CreateVideoIcon}/>
        }

        <VerticalList className={isModalOpened ? "opened" : ""} listItemClassName="options-item" items={[
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
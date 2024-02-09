import "./styles.scss"
import {VideoType} from "../../../shared/api/types/video-type";
import {VideoPreview} from "./video-preview";
import ahegao1 from "../../../images/temp/ahegao-1.jpg";
import {useTranslation} from "react-i18next";
import {formatReleasedDate} from "./format-released-date";
import {formatViews} from "./format-views";
import {DotsButton} from "../../../shared/ui/dots-menu-icon";
import {useModal} from "../../../shared/lib/use-modal";
import {VideoActionsModalSlotType} from "../../../widgets/video-actions-modal";

type PropsType = {
    video: VideoType,
    VideoActionsModalSlot:VideoActionsModalSlotType
}

export function VideoCard({video, VideoActionsModalSlot}: PropsType) {
    const {t} = useTranslation();
    const {isModalOpened, toggleModal, stopPropagationInModal} = useModal(false);

    return <div className="video">
        <VideoPreview preview={video.preview}/>
        <img className="video__channel-icon" src={ahegao1} alt=""/>
        <span className="video_title">{video.title}</span>
        <DotsButton onClick={toggleModal}
                    onModalClick={stopPropagationInModal}
                    ModalSlot={VideoActionsModalSlot}
                    isModalOpened={isModalOpened}
                    isOpened={isModalOpened}
        />
        <span className="video__channel-name">{video.channelId}</span>
        <span className="video__views">{formatViews(video.views, t)}</span>
        <span className="video__ago">{formatReleasedDate(video.releaseDate, t)}</span>
    </div>
}
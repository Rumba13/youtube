import "./styles.scss";
import {useEffect} from "react";
import {overlayState} from "../../../app/overlay";
import {videoTagsState} from "../model/model";
import {observer} from "mobx-react";
import {VideoTagsItem} from "./video-tags-item";

export const VideoTags = observer(() => {
    const {activeTag, videoTags, setVideoTags, setActiveTag, loadVideoTags, isLoading, isError} = videoTagsState;

    useEffect(() => {
        loadVideoTags();
    }, []);

    function setActiveTagAndToggleOverlay(videoTagId: string | null) {
        setActiveTag(videoTagId);
        overlayState.setIsOverlayOpened(true);

        setTimeout(() => { //TODO FUTURE Replace setTimeout with video loading state
            overlayState.setIsOverlayOpened(false)
        }, 1000)
    }

    if (isLoading) {
        return <></>
    }

    return <ul className="video-tags">
        <VideoTagsItem isActive={activeTag === null}
                           onClick={() => setActiveTagAndToggleOverlay(null)}
                           key={0}>
            Все
        </VideoTagsItem>

        {videoTags.map(videoTag => <VideoTagsItem
            isActive={activeTag === videoTag.id}
            onClick={() => setActiveTagAndToggleOverlay(videoTag.id)}
            key={videoTag.id}
        >{videoTag.title}</VideoTagsItem>)}
    </ul>
})
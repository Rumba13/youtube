import "./styles.scss";
import {useEffect} from "react";
import {videoState} from "../model/model";
import {observer} from "mobx-react";
import {VideoCard} from "../../../entities/video-card";

export const VideoList = observer(() => {

    const {videos, loadVideos} = videoState

    useEffect(() => {
        loadVideos();
    }, []);

    return <div className="video-list">
        {videos.map(video => <VideoCard video={video} key={video.id}/>)}
    </div>
})
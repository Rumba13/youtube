import {makeAutoObservable} from "mobx";
import {VideoType} from "../../../shared/api/types/video-type";
import {VideoService} from "../../../shared/api/video-service";

class VideoState {
    private videoService: VideoService;
    public videos: VideoType[] = [];

    public setVideos = (videos: VideoType[]) => this.videos = videos

    constructor(videoService: VideoService) {
        makeAutoObservable(this);
        this.videoService = videoService;
    }

    public loadVideos = async () => {
        const videos = await this.videoService.loadRecommendedVideos()
        this.setVideos(videos);
    }
}

export const videoState = new VideoState(new VideoService());

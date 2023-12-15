import {VideoType} from "./types/video-type";

class VideoService {
    public async loadRecommendedVideos(): Promise<VideoType[]> {
        return [
            {
                id: "123",
                channelId: "@Eva",
                duration: 123,
                preview: "",
                releaseDate: (new Date()),
                title: "video",
                views: 100000
            }
        ]
    }
}

export const videoService = new VideoService();
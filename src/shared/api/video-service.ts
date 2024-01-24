import {VideoType} from "./types/video-type";
import {VideoTagType} from "./types/video-tag-type";
import {wait} from "../lib/wait";

export class VideoService {
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

    public async loadSearchTags(): Promise<VideoTagType[]> {
        await wait(1000);
        return [ //TODO add first tag "Всё" when develop ui
            {title: "Видеоигры", id: "1"},
            {title: "Джемы", id: "2"},
            {title: "Музыка", id: "3"},
            {title: "Димка с евой", id: "4"},
            {title: "Экшен и приключение", id: "5"},
            {title: "Дима + Ева", id: "6"},
            {title: "Димкины фотки", id: "7"},
            {title: "Арсен бомж", id: "8"},
        ]
    }
}

export const videoService = new VideoService();
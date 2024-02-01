import {VideoType} from "./types/video-type";
import {VideoTagType} from "./types/video-tag-type";
import {wait} from "../lib/wait";
import videoPreview1 from "../../images/temp/video-preview-1.jpeg";
import videoPreview2 from "../../images/temp/video-preview-2.jpg";
import videoPreview3 from "../../images/temp/video-preview-3.jpg";
import videoPreview4 from "../../images/temp/video-preview-4.jpg";
import videoPreview5 from "../../images/temp/video-preview-5.jpg";
import videoPreview6 from "../../images/temp/video-preview-6.jpg";
import videoPreview7 from "../../images/temp/video-preview-7.jpg";

export class VideoService {
    public async loadRecommendedVideos(): Promise<VideoType[]> {
        return [
            {
                id: "1",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview1,
                releaseDate: (new Date('Jan 30, 2024 16:54:00')),
                title: "Вич доктор перекурил НОВУЮ мету. DOTA 2",
                views: 6500
            },
            {
                id: "2",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview2,
                releaseDate: (new Date('Nov 17, 2021 03:24:00')),
                title: "Вич-Доктор разносит кабины, +800 к аналу тотема",
                views: 100000
            }, {
                id: "3",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview3,
                releaseDate: (new Date('Jan 30, 2023 03:24:00')),
                title: "Ауф братва мы богаты, го на гелике в МАСКВУ, Разябём усё",
                views: 1500000
            }, {
                id: "4",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview4,
                releaseDate: (new Date('Jan 30, 2024 03:24:00')),
                title: "Жалкий свин презренно существует",
                views: 2
            }, {
                id: "5",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview5,
                releaseDate: (new Date('Sep 30, 2023 03:24:00')),
                title: "Замотевский-Алкаш смеет посягать на бутылку водки бомжей-филаматов",
                views: 58000000
            }, {
                id: "6",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview6,
                releaseDate: (new Date('Dec 30, 2023 03:24:00')),
                title: "Димку приговорили к расстрелу, и царь лично очистил мир от вони",
                views: 154000
            }, {
                id: "7",
                channelId: "@Eva",
                duration: 123,
                preview: videoPreview7,
                releaseDate: (new Date('Dec 30, 2023 10:24:00')),
                title: "ЦАРЯ ДОЛЖНЫ УВАЖАТЬ. Молитвы в честь царя-кирилла",
                views: 18000
            },
        ]
    }

    public async loadSearchTags(): Promise<VideoTagType[]> {
        await wait(1000);
        return [
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

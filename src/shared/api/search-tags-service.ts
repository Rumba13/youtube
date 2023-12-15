import {SearchTagType} from "./types/search-tag-type";

class SearchTagsService {
    public async loadSearchTags(): Promise<SearchTagType[]> {
        return [ //TODO add first tag "Всё" when develop ui
            {title: "Видеоигры"},
            {title: "Джемы"},
            {title: "Музыка"},
            {title: "Димка с евой"},
            {title: "Экшен и приключение"},
            {title: "Дима + Ева"},
            {title: "Димкины фотки"},
            {title: "Арсен бомж"},
        ]
    }
}

export const searchTagsService = new SearchTagsService();
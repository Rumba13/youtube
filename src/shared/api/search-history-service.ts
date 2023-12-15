import {SearchHistoryType} from "./types/search-history-type";

class SearchHistoryService {
    constructor() {
    }

    public async loadSearchHistory(): Promise<SearchHistoryType[]> {
        return [
            {searchQuery: "Гей порно Димка"},
            {searchQuery: "найс играешь"},
            {searchQuery: "влад бомжекрут"},
            {searchQuery: "Ева песни до утра"},
            {searchQuery: "дима с евой"},
            {searchQuery: "Баллада о бомже-горохе"},
            {searchQuery: "Гей порно Димка"},
            {searchQuery: "8800853535"},
            {searchQuery: "Как же подружиться с человеком?"},
            {searchQuery: "zxc cursed"},
            {searchQuery: "123"},
            {searchQuery: "Ваш фонтан - ваш враг"},

        ];
    }
}

export const searchHistoryService = new SearchHistoryService();
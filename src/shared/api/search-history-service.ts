import {SearchHistoryType} from "./types/search-history-type";
import { axiosServerConnection } from './axios-server-connection';

class SearchHistoryService {
    public async loadRecentSearchHistory(): Promise<SearchHistoryType[]> {
        try {
            return (await axiosServerConnection.get('/recent-search-history')).data;
        }
        catch (err) {
            console.log(err);
            return [];
        }
    }
}
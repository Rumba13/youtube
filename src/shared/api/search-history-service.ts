import { SearchHistoryType } from './types/search-history-type';
import { serverConnection } from './server-connection';

class SearchHistoryService {
  public async loadRecentSearchHistory(userJwt: string | null): Promise<SearchHistoryType[]> {
    try {
      return (
        await serverConnection.get('/recent-search-history', {
          headers: {
            Authorization: userJwt,
          },
        })
      ).data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }
}

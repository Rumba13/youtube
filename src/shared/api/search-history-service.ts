import { SearchHistory } from './types/search-history';
import { serverConnection } from './server-connection';

class SearchHistoryService {
 public async loadRecentSearchHistory(userJwt: string | null): Promise<SearchHistory[]> {
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

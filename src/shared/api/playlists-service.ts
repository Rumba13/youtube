import { Playlist } from './types/playlist';
import { serverConnection } from './server-connection';

export class PlaylistsService {
  public async loadUserPlaylists(userJwt: string | null): Promise<Playlist[]> {
    try {
      return (
        await serverConnection.get('/playlists', {
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

import { PlaylistType } from './types/playlist-type';
import { axiosServerConnection } from './axios-server-connection';

export class PlaylistsService {
  public async loadUserPlaylists(): Promise<PlaylistType[]> {
    try {
      return (await axiosServerConnection.get('/playlists')).data
    }
    catch (err) {
      console.log(err);
      return [];
    }

  }
}
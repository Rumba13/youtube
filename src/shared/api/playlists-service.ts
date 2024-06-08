import { PlaylistType } from './types/playlist-type';
import { serverConnection } from './server-connection';

export class PlaylistsService {
 public async loadUserPlaylists(userJwt: string | null): Promise<PlaylistType[]> {
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

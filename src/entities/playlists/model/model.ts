import { Playlist } from '../../../shared/api/types/playlist';
import { makeAutoObservable } from 'mobx';
import { PlaylistsService } from '../../../shared/api/playlists-service';

export class PlaylistsModel {
  public playlists: Playlist[] = [];
  public playlistsService: PlaylistsService;

  public setPlaylists = (playlists: Playlist[]) => (this.playlists = playlists);

  constructor(playlistsService: PlaylistsService) {
    makeAutoObservable(this);
    this.playlistsService = playlistsService;
  }

  public async loadPlaylists(userJwt: string | null) {
    this.setPlaylists(await this.playlistsService.loadUserPlaylists(userJwt));
  }
}

export const playlistsStore = new PlaylistsModel(new PlaylistsService());

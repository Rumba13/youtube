import { PlaylistType } from '../../../shared/api/types/playlist-type';
import { makeAutoObservable } from 'mobx';
import { PlaylistsService } from '../../../shared/api/playlists-service';

export class PlaylistsModel {
  public playlists: PlaylistType[] = [];
  public playlistsService: PlaylistsService;

  public setPlaylists = (playlists: PlaylistType[]) => (this.playlists = playlists);

  constructor(playlistsService: PlaylistsService) {
    makeAutoObservable(this);
    this.playlistsService = playlistsService;
  }

  public async loadPlaylists(userJwt: string | null) {
    this.setPlaylists(await this.playlistsService.loadUserPlaylists(userJwt));
  }
}

export const playlistsState = new PlaylistsModel(new PlaylistsService());

import {makeAutoObservable} from "mobx";
import {SubscriptionType} from "../../../shared/api/types/subscription-type";
import {UserService, UserServiceType} from "../../../shared/api/user-service";
import {PlaylistType} from "../../../shared/api/types/playlist-type";
import { PlaylistsService } from '../../../shared/api/playlists-service';
import { SubscriptionsService } from '../../../shared/api/subscriptions.service';

export class UserState {
    public userService: UserServiceType;
    public playlistsService:PlaylistsService;
    public subscriptions: SubscriptionType[] = [];
    public playlists: PlaylistType[] = [];
    public subscriptionsService: SubscriptionsService;

    public setSubscriptions = (subscriptions: SubscriptionType[]) => this.subscriptions = subscriptions;
    public setPlaylists = (playlists: PlaylistType[]) => this.playlists = playlists;


    constructor(userService: UserServiceType, playlistsService:PlaylistsService, subscriptionsService:SubscriptionsService) {
        makeAutoObservable(this);
        this.userService = userService;
        this.playlistsService = playlistsService;
        this.subscriptionsService = subscriptionsService
    }

    public async loadSubscriptions() {
        this.setSubscriptions(await this.subscriptionsService.loadUserSubscriptions());
    }
    public async loadPlaylists() {
        this.setPlaylists(await this.playlistsService.loadUserPlaylists());
    }
}

export const userState = new UserState(new UserService(), new PlaylistsService(), new SubscriptionsService());
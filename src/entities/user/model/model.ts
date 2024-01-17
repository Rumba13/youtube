import {makeAutoObservable} from "mobx";
import {SubscriptionType} from "../../../shared/api/types/subscription-type";
import {UserService, UserServiceType} from "../../../shared/api/user-service";
import {PlaylistType} from "../../../shared/api/types/playlist-type";

export class UserState {
    public userService: UserServiceType;
    public subscriptions: SubscriptionType[] = [];
    public playlists: PlaylistType[] = [];

    public setSubscriptions = (subscriptions: SubscriptionType[]) => this.subscriptions = subscriptions;
    public setPlaylists = (playlists: PlaylistType[]) => this.playlists = playlists;


    constructor(userService: UserServiceType) {
        makeAutoObservable(this);
        this.userService = userService;
    }

    public async loadSubscriptions() {
        this.setSubscriptions(await this.userService.loadUserSubscriptions());
    }
    public async loadPlaylists() {
        this.setPlaylists(await this.userService.loadUserPlaylists());
    }
}

export const userState = new UserState(new UserService());
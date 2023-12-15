import {UserNotificationType} from "./types/user-notification-type";

class UserNotificationsService {
    public async loadNotifications(): Promise<UserNotificationType[]> {
        return [
            {channelId:"@BeerKvas", videoId:"1000-7"},
            {channelId:"@Leras", videoId:"8"},
            {channelId:"@Kabanus", videoId:"23123sdasd"},
            {channelId:"@Zxc", videoId:"Kklas"},
            {channelId:"@MyLife", videoId:"Ymnasda"},
        ]
    }
}

export const userNotificationsService = new UserNotificationsService();
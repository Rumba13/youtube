import {NotificationType} from "./types/notification-type";
import i from "../../images/temp/user-profile-icon.jpg";
import previewImage from "../../images/temp/preview-image.jpg"

export class NotificationsService {
    public async loadNotifications(): Promise<string[]> { //TODO user id
        return Promise.resolve([
            "1",
            "2",
            "3",
        ]);
    }

    public async loadNotificationData(notificationId: string): Promise<NotificationType> {

        if (notificationId === "1") {
            return Promise.resolve({
                id: "1",
                title: "На канале \"Nostoro\" идет трансляция \"Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы\"",
                icon: i,
                previewImage: previewImage,
                releasedAgo: new Date()
            });
        } else if (notificationId === "2") {
            return Promise.resolve({
                id: "2",
                title: "На канале \"Nostoro\" идет трансляция \"Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы\"",
                icon: i,
                previewImage: previewImage,
                releasedAgo: new Date()
            });
        } else {
            return Promise.resolve({
                id: "3",
                title: "На канале \"GayBomj\" идет трансляция \"Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы\"",
                icon: i,
                previewImage: previewImage,
                releasedAgo: new Date()
            });
        }


    }
}

export const notificationsService = new NotificationsService();
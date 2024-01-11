import {NotificationType} from "./types/notification-type";
import i from "../../images/temp/user-profile-icon.jpg";
import previewImage from "../../images/temp/preview-image.jpg"

export class NotificationsService {
    public async loadNotificationsCount(): Promise<number> {
        return 3;
    }

    public async loadNotifications(): Promise<NotificationType[]> {
        return new Promise((resolve, reject) => {

            setTimeout(() =>
                    resolve([
                        {
                            id: "1",
                            title: "На канале \"Nostoro\" идет трансляция \"Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы\"",
                            icon: i,
                            previewImage: previewImage,
                            releasedAgo: new Date()
                        },
                        {
                            id: "2",
                            title: "На канале \"Nostoro\" идет трансляция \"Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы\"",
                            icon: i,
                            previewImage: previewImage,
                            releasedAgo: new Date()
                        },
                        {
                            id: "3",
                            title: "На канале \"GayBomj\" идет трансляция \"Просто хочу предупредить: в ромовой бабе есть немного рома, но нет бабы\"",
                            icon: i,
                            previewImage: previewImage,
                            releasedAgo: new Date()
                        }])
                , 2000)


        })

    }
}

export const notificationsService = new NotificationsService();
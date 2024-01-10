import {makeAutoObservable} from "mobx";
import {NotificationsService} from "../../../shared/api/notifications-service";
import {NotificationType} from "../../../shared/api/types/notification-type";

export class NotificationsState { //TODO refuck
    private notificationsService: NotificationsService;
    public notifications?:NotificationType[];
    public notificationsIds:string[] = [];

    get unViewedNotificationsCount(): number{
        return this.notifications?.length || 0;
    }

    constructor(notificationsService: NotificationsService) {
        makeAutoObservable(this);
        this.notificationsService = notificationsService;
    }

    public async loadNotifications() { //TODO user id
        this.notificationsIds = await this.notificationsService.loadNotifications();
    }
    public async loadNotificationsData() {
        this.notifications = [];

        for (const notificationId of this.notificationsIds) {
            const index = this.notificationsIds.indexOf(notificationId);
            this.notifications[index] = await this.notificationsService.loadNotificationData(notificationId);
        }
    }

}

export {NotificationsState as NotificationsStateType};
export const notificationsState = new NotificationsState(new NotificationsService());
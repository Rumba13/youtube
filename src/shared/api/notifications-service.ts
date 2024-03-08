import {NotificationType} from "./types/notification-type";
import { axiosServerConnection } from './axios-server-connection';

export class NotificationsService {
    public async loadNotificationsCount(): Promise<number> {
      try {
        return (await axiosServerConnection.get('/notifications-count')).data
      }
      catch (err) {
        console.log(err);
        return 0;
      }
    }

    public async loadNotifications(): Promise<NotificationType[]> {
      try {
        return (await axiosServerConnection.get('/notifications')).data
      }
      catch (err) {
        console.log(err);
        return [];
      }

    }
}
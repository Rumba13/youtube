import { Notification } from './types/notification';
import { serverConnection } from './server-connection';

export class NotificationsService {
 public async loadNotificationsCount(userJwt: string | null): Promise<number> {
  try {
   return (
    await serverConnection.get('/notifications-count', {
     headers: {
      Authorization: userJwt,
     },
    })
   ).data;
  } catch (err) {
   console.log(err);
   return 0;
  }
 }

 public async loadNotifications(userJwt: string | null): Promise<Notification[]> {
  try {
   return (
    await serverConnection.get('/notifications', {
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

import { makeAutoObservable } from 'mobx';
import { NotificationsService } from '../../../shared/api/notifications-service';
import { NotificationType } from '../../../shared/api/types/notification-type';
import { userState } from '../../user';

class NotificationsState {
 private notificationsService: NotificationsService;
 public notifications: NotificationType[] = [];
 private notificationsCount = 0;
 public isLoading = false;
 public isError = false;

 public setIsLoading = (isLoading: boolean) => (this.isLoading = isLoading);
 public setIsError = (isError: boolean) => (this.isError = isError);

 public setNotificationsCount = (count: number) => (this.notificationsCount = count);

 get unViewedNotificationsCount(): number {
  return this.notifications?.length || this.notificationsCount;
 }

 constructor(notificationsService: NotificationsService, userJwt: string | null) {
  makeAutoObservable(this);
  this.notificationsService = notificationsService;
  this.loadNotificationsCount(userJwt);
 }

 public async loadNotificationsCount(userJwt: string | null) {
  this.setNotificationsCount(await this.notificationsService.loadNotificationsCount(userJwt));
 }

 public async loadNotifications(userJwt: string | null) {
  this.setIsLoading(true);

  try {
   this.notifications = await this.notificationsService.loadNotifications(userJwt);
  } catch (err) {
   this.setIsError(true);
  } finally {
   this.setIsLoading(false);
  }
 }
}

export { NotificationsState as NotificationsStateType };
export const notificationsState = new NotificationsState(new NotificationsService(), userState.getUserJwt());

import { makeAutoObservable } from 'mobx';
import { Subscription } from '../../../shared/api/types/subscription';
import { SubscriptionsService } from '../../../shared/api/subscriptions.service';

export class SubscriptionsStore {
 public subscriptions: Subscription[] = [];
 private subscriptionsService: SubscriptionsService;

 public setSubscriptions = (subscriptions: Subscription[]) => (this.subscriptions = subscriptions);

 constructor(subscriptionsService: SubscriptionsService) {
  makeAutoObservable(this);
  this.subscriptionsService = subscriptionsService;
 }

 public async loadSubscriptions(userJwt: string | null) {
  this.setSubscriptions(await this.subscriptionsService.loadUserSubscriptions(userJwt));
 }
}

export const subscriptionsStore = new SubscriptionsStore(new SubscriptionsService());

import { makeAutoObservable } from 'mobx';
import { SubscriptionType } from '../../../shared/api/types/subscription-type';
import { SubscriptionsService } from '../../../shared/api/subscriptions.service';

export class SubscriptionsState {
  public subscriptions: SubscriptionType[] = [];
  private subscriptionsService: SubscriptionsService;

  public setSubscriptions = (subscriptions: SubscriptionType[]) => (this.subscriptions = subscriptions);

  constructor(subscriptionsService: SubscriptionsService) {
    makeAutoObservable(this);
    this.subscriptionsService = subscriptionsService;
  }

  public async loadSubscriptions(userJwt: string | null) {
    this.setSubscriptions(await this.subscriptionsService.loadUserSubscriptions(userJwt));
  }
}

export const subscriptionsState = new SubscriptionsState(new SubscriptionsService());

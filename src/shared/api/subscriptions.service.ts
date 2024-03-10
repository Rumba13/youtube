import { SubscriptionType } from './types/subscription-type';
import { axiosServerConnection } from './axios-server-connection';

export class SubscriptionsService {
  public async loadUserSubscriptions(): Promise<SubscriptionType[]> {
    try {
      return (await axiosServerConnection.get('/subscriptions')).data;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  public async loadChannel(channelId: string): Promise<SubscriptionType | null> {
    try {
      return (
        await axiosServerConnection.get('/subscription', {
          params: {
            channelId,
          },
        })
      ).data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

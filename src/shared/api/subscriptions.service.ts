import { SubscriptionType } from './types/subscription-type';
import { serverConnection } from './server-connection';

export class SubscriptionsService {
  public async loadUserSubscriptions(userJwt: string | null): Promise<SubscriptionType[]> {
    try {
      return (
        await serverConnection.get('/subscriptions', {
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

  public async loadChannel(channelId: string): Promise<SubscriptionType | null> {
    try {
      return (
        await serverConnection.get('/subscription', {
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

import { Subscription } from './types/subscription';
import { serverConnection } from './server-connection';

export class SubscriptionsService {
  public async loadUserSubscriptions(userJwt: string | null): Promise<Subscription[]> {
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

  public async loadChannel(channelId: string): Promise<Subscription | null> {
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

import { SubscriptionsService } from '../../../shared/api/subscriptions.service';

export async function loadChannelNameById(channelId: string): Promise<string | null> {
  const subscriptionsService = new SubscriptionsService();
  const channel = await subscriptionsService.loadChannel(channelId);
  return channel?.title || null;
}

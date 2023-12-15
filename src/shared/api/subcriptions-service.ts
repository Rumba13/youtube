import {SubscriptionType} from "./types/subscription-type";

class SubcriptionsService {
    public async getUserSubcriptions(): Promise<SubscriptionType[]> {

        return [
            {channelId: "@eva228"},
            {channelId: "@eva228"},
            {channelId: "@eva228"},
            {channelId: "@eva228"},
            {channelId: "@eva228"},
            {channelId: "@eva228"},

        ]


    }
}

export const subcriptionsService = new SubcriptionsService();
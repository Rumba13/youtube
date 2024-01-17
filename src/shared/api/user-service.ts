import {UserType} from "./types/user-type";
import {SubscriptionType} from "./types/subscription-type";
import ahegao1 from "../../images/temp/ahegao-1.jpg";
import ahegao2 from "../../images/temp/ahegao-2.jpg";
import ahegao3 from "../../images/temp/ahegao-3.jpg";
import {PlaylistType} from "./types/playlist-type";

export class UserService {
    public async loadUserByJwt(jwt: string): Promise<UserType> {
        return Promise.resolve({
            id: "123",
            icon: "https://distribution.faceit-cdn.net/images/ce6fbecf-0af4-4da0-bbb2-0eb09e5d767f.jpeg",
            name: "Пумба",
        })
    }

    public async loadUserSubscriptions(): Promise<SubscriptionType[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        title: "Kabanus",
                        icon: ahegao1,
                        isNewVideo: false,
                        isStream: false,
                        id: "1"
                    },
                    {
                        title: "DimkaTv",
                        icon: ahegao2,
                        isNewVideo: false,
                        isStream: false,
                        id: "2"
                    },
                    {
                        title: "ZVERI",
                        icon: ahegao3,
                        isNewVideo: false,
                        isStream: false,
                        id: "3"
                    },
                    {
                        title: "Kabanus",
                        icon: ahegao1,
                        isNewVideo: false,
                        isStream: false,
                        id: "4"
                    },
                    {
                        title: "DimkaTv",
                        icon: ahegao2,
                        isNewVideo: false,
                        isStream: false,
                        id: "5"
                    },
                    {
                        title: "ZVERI",
                        icon: ahegao3,
                        isNewVideo: false,
                        isStream: false,
                        id: "6"
                    },
                    {
                        title: "Kabanus",
                        icon: ahegao1,
                        isNewVideo: false,
                        isStream: false,
                        id: "7"
                    },
                    {
                        title: "DimkaTv",
                        icon: ahegao2,
                        isNewVideo: false,
                        isStream: false,
                        id: "8"
                    },
                    {
                        title: "ZVERI",
                        icon: ahegao3,
                        isNewVideo: false,
                        isStream: false,
                        id: "9"
                    },
                    {
                        title: "ZVERI",
                        icon: ahegao3,
                        isNewVideo: false,
                        isStream: false,
                        id: "10"
                    },
                    {
                        title: "ZVERI",
                        icon: ahegao3,
                        isNewVideo: false,
                        isStream: false,
                        id: "11"
                    },
                    {
                        title: "ZVERI",
                        icon: ahegao3,
                        isNewVideo: false,
                        isStream: false,
                        id: "12"
                    },
                ]);
            }, 2400)
        })

    }

    public async loadUserPlaylists(): Promise<PlaylistType[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{
                    title: "The Talos Principle",
                    href: "https://www.youtube.com/playlist?list=PLvXNXbRfDbwWCLV_A_s1C8pPPM1iPIWZM"
                }]);
            }, 2400)
        })

    }
}

export type {UserService as UserServiceType};
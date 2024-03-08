import {UserType} from "./types/user-type";

export class UserService { //TODO separate subscriptions service
    public async loadUserProfile(jwt: string): Promise<UserType> { //TODO rename to auth(the best would be deprecate this part)
        return Promise.resolve({
            id: "123",
            icon: "https://distribution.faceit-cdn.net/images/ce6fbecf-0af4-4da0-bbb2-0eb09e5d767f.jpeg",
            name: "Пумба",
        })
    }
}

export type {UserService as UserServiceType};
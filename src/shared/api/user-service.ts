import {UserType} from "./types/user-type";

class UserService {
    public async loadUserByJwt(jwt: string): Promise<UserType> {
        return {
            id: "123",
            icon: "https://distribution.faceit-cdn.net/images/ce6fbecf-0af4-4da0-bbb2-0eb09e5d767f.jpeg",
            name: "Пумба",
        }
    }
}

export const userService = new UserService();
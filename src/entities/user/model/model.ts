import { makeAutoObservable } from 'mobx';
import { UserType } from '../../../shared/api/types/user-type';
import Cookies from 'universal-cookie';
import { CONSTANTS } from '../../../shared/lib/constants';
import { jwtDecode } from 'jwt-decode';
import { serverConnection } from '../../../shared/api/server-connection';
import { JwtPayloadType } from '../../../shared/api/types/jwt-payload.type';

export class UserState {
  public user: UserType | null = null;
  public cookiesService: Cookies;

  public setUser = (user: UserType | null) => {
    this.user = user;
  };

  public getUserJwt = (): string | null => {
    return this.cookiesService.get(CONSTANTS.USER_JWT_COOKIE_NAME) || null;
  };
  public setUserJwt = (value: string | null) => {
    console.log(value);

    if (value !== null) {
      this.cookiesService.set(CONSTANTS.USER_JWT_COOKIE_NAME, value);
    } else {
      this.cookiesService.remove(CONSTANTS.USER_JWT_COOKIE_NAME);
    }
  };

  public jwtToUser(jwt: string): UserType {
    const payload: JwtPayloadType = jwtDecode(jwt);
    return {
      name: payload.username,
      id: payload.sub,
      ...payload,
    };
  }

  constructor(cookiesService: Cookies) {
    makeAutoObservable(this);
    this.cookiesService = cookiesService;

    const userJwt = this.getUserJwt();

    if (userJwt !== null) {
      this.user = jwtDecode(userJwt);
    }
  }
  public async signIn(name: string, password: string) {
    let jwt = null;

    try {
      const response = await serverConnection.post('/sign-in', {
        name,
        password,
      });

      jwt = response.data.access_token;
    } catch (err) {
      console.log(err);
    }

    const user: UserType = this.jwtToUser(jwt);
    this.setUser(user);
    this.setUserJwt(jwt);
  }
  public async signUp(name: string, password: string) {
    let jwt = null;

    try {
      jwt = (await serverConnection.post('/sign-up', { name, password })).data.access_token;
    } catch (err) {
      console.log(err);
    }

    const user: UserType = this.jwtToUser(jwt);
    this.setUser(user);
    this.setUserJwt(jwt);
  }
  public signOut() {
    this.setUser(null);
    this.setUserJwt(null);
  }
}

export const userState = new UserState(new Cookies());

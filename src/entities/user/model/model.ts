import { makeAutoObservable } from 'mobx';
import { UserService, UserServiceType } from '../../../shared/api/user-service';
import { UserType } from '../../../shared/api/types/user-type';
import Cookies from 'universal-cookie';

export class UserState {
  public userService: UserServiceType;
  public user: UserType | null = null;
  public cookiesService: Cookies;

  public setUser = (user: UserType) => (this.user = user);

  constructor(userService: UserServiceType, cookiesService: Cookies) {
    makeAutoObservable(this);
    this.userService = userService;
    this.cookiesService = cookiesService;
  }
}

export const userState = new UserState(new UserService(), new Cookies());

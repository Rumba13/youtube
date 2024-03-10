import { axiosServerConnection } from './axios-server-connection';
import Cookies from 'universal-cookie';

export class AuthService {
  private cookies = new Cookies();

  public async signIn(name: string, password: string) {
    try {
      const response = await axiosServerConnection.post('/sign-in', {
        name,
        password,
      });
      this.cookies.set('UserJwt', response.data.access_token);
      //decode and return => set into userState
    } catch (err) {
      console.log(err);
    }
  }
}

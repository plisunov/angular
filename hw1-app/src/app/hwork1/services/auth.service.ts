import {Injectable} from '@angular/core';
import {IUser, User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {AuthUser} from '../model/auth-user';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthToken} from '../model/auth-token';
import {IUserState} from '../../store/states/user.state';
import {Login} from '../../store/actions/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BEAVER_KEY = 'Beaver';
  private AUTORIZATION_TOKEN = 'Token';

  constructor(private httpClient: HttpClient) {
  }

  public login(login: Login): Observable<AuthToken> {
    return this.httpClient.post<AuthToken>(environment.HOST_URL + '/auth/login', {
      login: login.userInfo.login,
      password: login.userInfo.password,
    });
  }

  public userInfoRest(token: AuthToken): Observable<AuthUser> {
    const tokenKey = token.token;
    localStorage.setItem(this.AUTORIZATION_TOKEN, tokenKey);

    return this.httpClient.post<AuthUser>(environment.HOST_URL + '/auth/userInfo',
      {
        token: tokenKey
      });
  }

  public postUserInfo(userInfo: AuthUser): void {
    const user = new User(userInfo.id, userInfo.name.first, userInfo.name.last);
    localStorage.setItem(this.BEAVER_KEY, JSON.stringify(user));
  }

  public getToken(): string {
    return localStorage.getItem(this.AUTORIZATION_TOKEN);
  }

  public logout(): void {
    localStorage.removeItem(this.BEAVER_KEY);
    localStorage.removeItem(this.AUTORIZATION_TOKEN);
  }

  public isAuthenticated(): boolean {
    const item: string = localStorage.getItem(this.BEAVER_KEY);
    return !!item;
  }

  public getUserInfo(): IUserState {
    const userItem: string = localStorage.getItem(this.BEAVER_KEY);
    const tokenItem: string = localStorage.getItem(this.AUTORIZATION_TOKEN);
    if (userItem != null && tokenItem != null) {
      const storedUser: IUser = JSON.parse(userItem);
      return {user: storedUser, token: tokenItem};
    } else {
      return null;
    }
  }

}

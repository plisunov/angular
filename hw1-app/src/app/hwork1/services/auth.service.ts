import {Injectable} from '@angular/core';
import {IUser, User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {AuthUser} from '../model/auth-user';
import {environment} from '../../../environments/environment';
import {ObservableInput, Subject} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {AuthToken} from '../model/auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BEAVER_KEY = 'Beaver';
  private AUTORIZATION_TOKEN = 'Token';

  constructor(private httpClient: HttpClient) {
  }

  public login(login: string, password: string): Promise<void> {

    return this.httpClient.post(environment.HOST_URL + '/auth/login', {
      login,
      password
    }).pipe(mergeMap((tokenResponse: AuthToken) => this.userInfoRest(tokenResponse)))
      .toPromise()
      .then((userInfo: AuthUser) => {
        const user = new User(userInfo.id, userInfo.name.first, userInfo.name.last);
        localStorage.setItem(this.BEAVER_KEY, JSON.stringify(user));
      });
  }

  public userInfoRest(token: AuthToken): ObservableInput<AuthUser> {
    const tokenKey = token.token;
    localStorage.setItem(this.AUTORIZATION_TOKEN, tokenKey);

    return this.httpClient.post(environment.HOST_URL + '/auth/userInfo',
      {
        token: tokenKey
      });
  }

  public getToken(): string {
    return localStorage.getItem(this.AUTORIZATION_TOKEN);
  }

  public logout(): void {
    localStorage.removeItem(this.BEAVER_KEY);
  }

  public isAuthenticated(): boolean {
    const item: string = localStorage.getItem(this.BEAVER_KEY);
    return !!item;
  }

  public getUserInfo(): IUser {
    const item: string = localStorage.getItem(this.BEAVER_KEY);
    if (item != null) {
      return JSON.parse(item);
    } else {
      return null;
    }
  }

}

import {Injectable} from '@angular/core';
import {IUser, User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private BEAVER_KEY = 'Beaver';

  constructor() {
  }

  public login(): void {
    console.log('Logged fake user');
    localStorage.setItem(this.BEAVER_KEY, JSON.stringify(new User(4, 'Ivan', 'Ivanov')));
  }

  public logout(): void {
    console.log('Logout fake user');
    localStorage.removeItem(this.BEAVER_KEY);
  }

  public isAuthenticated(): boolean {
    console.log('Get is authenticated');
    const item: string = localStorage.getItem(this.BEAVER_KEY);
    return !!item;
  }

  public getUserInfo(): IUser {
    console.log('Get logged user info');
    const item: string = localStorage.getItem(this.BEAVER_KEY);
    if (item != null) {
      return JSON.parse(item);
    } else {
      return null;
    }
  }

}

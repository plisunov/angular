import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {IUser} from '../model/user';

describe('AuthService', () => {
  let service: AuthService;
  const BEAVER_KEY = 'Beaver';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log message during login', () => {
    spyOn(window.console, 'log');
    service.login();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should place user info to local storage during login', () => {
    service.login();
    const item: IUser = JSON.parse(localStorage.getItem(BEAVER_KEY));
    expect(item.id).toEqual(4);
  });


  it('should log message during logout', () => {
    spyOn(window.console, 'log');
    service.logout();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should remove user info from local storage during logout', () => {
    service.login();
    const loggedUserInfo: IUser = JSON.parse(localStorage.getItem(BEAVER_KEY));
    expect(loggedUserInfo.id).toEqual(4);
    service.logout();
    expect(localStorage.getItem(BEAVER_KEY)).toEqual(null);
  });

  it('should log message during isAuthenticated', () => {
    spyOn(window.console, 'log');
    service.isAuthenticated();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should return true for authenticated user', () => {
    service.login();
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should return false for non authenticated user', () => {
    service.logout();
    expect(service.isAuthenticated()).toBeFalse();
  });

  it('should log message during getUserInfo', () => {
    spyOn(window.console, 'log');
    service.getUserInfo();
    expect(window.console.log).toHaveBeenCalled();
  });

  it('should return user info for authenticated user', () => {
    service.login();
    const userInfo: IUser = service.getUserInfo();
    expect(userInfo.id).toEqual(4);
  });

  it('should return null for non authenticated user', () => {
    service.logout();
    expect(service.getUserInfo()).toEqual(null);
  });

});

import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {IUser, User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  const BEAVER_KEY = 'Beaver';
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(AuthService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should place user info to local storage during login', () => {
    service.login('user', 'password').then(() => {
      const item: IUser = JSON.parse(localStorage.getItem(BEAVER_KEY));
      expect(item.id).toEqual(1);
    });
    const loginRequest = httpMock.expectOne(environment.HOST_URL + '/auth/login');
    loginRequest.flush('{token: "A_B_C_D_E_F"}');
    expect(loginRequest.request.method).toEqual('POST');
    const userInfoRequest = httpMock.expectOne(environment.HOST_URL + '/auth/userInfo');
    userInfoRequest.flush('{id: 1,fakeToken: "A_B_C_D_E_F",name:{first: "AAA",last: "BBBB"},login: "login",password:"password"}');
    expect(userInfoRequest.request.method).toEqual('POST');
  });


  it('should remove user info from local storage during logout', () => {
    service.logout();
    expect(localStorage.getItem(BEAVER_KEY)).toEqual(null);
  });

  it('should return true for authenticated user', () => {
    localStorage.setItem(BEAVER_KEY, 'sdfasfsd');
    expect(service.isAuthenticated()).toBeTrue();
  });

  it('should return false for non authenticated user', () => {
    service.logout();
    expect(service.isAuthenticated()).toBeFalse();
  });

  it('should return user info for authenticated user', () => {
    localStorage.setItem(BEAVER_KEY, JSON.stringify(new User(4, 'Jonn', 'Smith')));
    const userInfo: IUser = service.getUserInfo();
    expect(userInfo.id).toEqual(4);
  });

  it('should return null user info for non authenticated user', () => {
    service.logout();
    expect(service.getUserInfo()).toEqual(null);
  });

});

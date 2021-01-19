import {TestBed} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthService} from './auth.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let authService: AuthService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [AuthService]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    httpClient = TestBed.inject(HttpClient);
    router.initialNavigation();
    authService = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(true);
    const dummyRoute = {} as ActivatedRouteSnapshot;
    const fakeRouteState = {} as RouterStateSnapshot;
    const canActivate = guard.canActivate(dummyRoute, fakeRouteState);
    expect(canActivate).toBeInstanceOf(Observable);
  });


  it('should redirect to login if non-authenticated', () => {
    spyOn(authService, 'isAuthenticated').and.returnValue(false);
    const dummyRoute = {} as ActivatedRouteSnapshot;
    const fakeRouteState = {} as RouterStateSnapshot;
    const canActivate = guard.canActivate(dummyRoute, fakeRouteState);
    const urlTree = router.parseUrl('/login');
    expect(canActivate).toEqual(urlTree);
  });

});

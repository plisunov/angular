import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../hwork1/services/auth.service';
import {Router} from '@angular/router';
import {
  EUserActions,
  Login,
  LoginError,
  LoginSuccess,
  UserDataLoad,
  UserDataLoaded,
  UserFromLocalStorageLoaded
} from '../actions/user.actions';
import {catchError, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {AuthUser} from '../../hwork1/model/auth-user';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  @Effect()
  login$ = this.actions$.pipe(
    ofType(EUserActions.Login),
    distinctUntilChanged(),
    switchMap((action: Login) => {
        return this.authService.login(action).pipe(
          map((token) => new LoginSuccess(token)),
          catchError((err) => of(new LoginError()))
        );
      }
    )
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(EUserActions.LoginSuccess),
    distinctUntilChanged(),
    map((action: LoginSuccess) => new UserDataLoad(action.token))
  );

  @Effect({dispatch: false})
  loginError$ = this.actions$.pipe(
    ofType(EUserActions.LoginError),
    distinctUntilChanged(),
    tap(() => {
      alert('Invalid credentials');
    })
  );

  @Effect()
  loadData$ = this.actions$.pipe(
    ofType(EUserActions.UserDataLoad),
    distinctUntilChanged(),
    switchMap((action: UserDataLoad) => {
        return this.authService.userInfoRest(action.token).pipe(
          map((userInfo: AuthUser) => new UserDataLoaded(userInfo))
        );
      }
    )
  );

  @Effect({dispatch: false})
  userDataLoaded$ = this.actions$.pipe(
    ofType(EUserActions.UserDataLoaded),
    distinctUntilChanged(),
    tap((action: UserDataLoaded) => {
      this.authService.postUserInfo(action.user);
      this.router.navigate(['/courses']);
    })
  );

  @Effect()
  userFromLocalStorageLoad = this.actions$.pipe(
    ofType(EUserActions.UserFromLocalStorageLoad),
    distinctUntilChanged(),
    map(() => {
      const data = this.authService.getUserInfo();
      return new UserFromLocalStorageLoaded(data);
    })
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType(EUserActions.Logout),
    distinctUntilChanged(),
    tap(() => {
      this.authService.logout();
      this.router.navigate(['/login']);
    })
  );

}

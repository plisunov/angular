import {Action} from '@ngrx/store';
import {AuthToken} from '../../hwork1/model/auth-token';
import {AuthUser} from '../../hwork1/model/auth-user';
import {IUserLoginPayload, IUserState} from '../states/user.state';

export enum EUserActions {
  Login = '[User] Login',
  LoginSuccess = '[User] LoginSuccess',
  LoginError = '[User] LoginError',
  UserDataLoad = '[User] UserLoadDataLoad',
  UserDataLoaded = '[User] UserDataLoaded',
  UserFromLocalStorageLoad = '[User] UserFromLocalStorageLoad',
  UserFromLocalStorageLoaded = '[User] UserFromLocalStorageLoaded',
  Logout = '[User] Logout',
}

export class Login implements Action {
  public readonly type = EUserActions.Login;

  constructor(public userInfo: IUserLoginPayload) {
  }
}


export class LoginSuccess implements Action {
  public readonly type = EUserActions.LoginSuccess;

  constructor(public token: AuthToken) {
  }
}

export class LoginError implements Action {
  public readonly type = EUserActions.LoginError;
}

export class UserDataLoad implements Action {
  public readonly type = EUserActions.UserDataLoad;

  constructor(public token: AuthToken) {
  }

}

export class UserDataLoaded implements Action {
  public readonly type = EUserActions.UserDataLoaded;

  constructor(public user: AuthUser) {
  }

}

export class LogOut implements Action {
  public readonly type = EUserActions.Logout;

  constructor() {
  }

}

export class UserFromLocalStorageLoad implements Action {
  public readonly type = EUserActions.UserFromLocalStorageLoad;
}

export class UserFromLocalStorageLoaded implements Action {
  public readonly type = EUserActions.UserFromLocalStorageLoaded;

  constructor(public userState: IUserState) {
  }
}


export type UserActions = Login | LoginSuccess
  | LoginError | LogOut
  | UserDataLoaded | UserDataLoad
  | UserFromLocalStorageLoad | UserFromLocalStorageLoaded;




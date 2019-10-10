import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN_START = '[Auth] Login Start',
  AUTHENTICATE_FAILED = '[Auth] Authenticate Failed',
  AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success',
  LOGOUT = '[Auth] Logout',
  AUTO_LOGIN = '[Auth] Auto Login'
}

export class LoginStart implements Action {
  readonly type = AuthActionTypes.LOGIN_START;

  constructor(public payload: { username: string; password: string }) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AuthActionTypes.AUTHENTICATE_SUCCESS;

  constructor(public payload: { id: number; username: string; redirect?: boolean }) {}
}

export class AuthenticateFailed implements Action {
  readonly type = AuthActionTypes.AUTHENTICATE_FAILED;

  constructor(public payload: string) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class AutoLogin implements Action {
  readonly type = AuthActionTypes.AUTO_LOGIN;
}

export type AuthActions = LoginStart | AuthenticateSuccess | AuthenticateFailed | Logout | AutoLogin;

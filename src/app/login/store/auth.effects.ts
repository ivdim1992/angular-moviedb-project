import { UserData } from './auth.effects';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthService, SnackBarService } from 'src/app/shared/services';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/models';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import * as fromAuthActions from './auth.actions';

export interface UserData {
  avatar: {};
  id: number;
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
}

const handleAuthentication = (userData: UserData) => {
  const user = new User(userData);
  const userId = userData.id;
  const username = userData.username;
  localStorage.setItem('userData', JSON.stringify(user));

  return new fromAuthActions.AuthenticateSuccess({ id: userId, username, redirect: true });
};

const handleError = errRes => {
  let errorMessage = 'an unknown error occured';
  if (!errRes.error || !errRes.error.status_message) {
    return of(new fromAuthActions.AuthenticateFailed(errorMessage));
  }
  errorMessage = 'Invalid username or password';
  return of(new fromAuthActions.AuthenticateFailed(errorMessage));
};

@Injectable()
export class AuthEffects {
  @Effect()
  authLogin = this._action$.pipe(
    ofType(fromAuthActions.AuthActionTypes.LOGIN_START),
    switchMap((authData: fromAuthActions.LoginStart) => {
      const credentials = { username: authData.payload.username, password: authData.payload.password };
      return this._authService.startLogin(credentials).pipe(
        map(resData => {
          this._snackBar.open({
            message: 'Login successfuly!'
          });
          return handleAuthentication(resData);
        }),
        catchError(errRes => {
          return handleError(errRes);
        })
      );
    })
  );

  @Effect()
  autoLogin = this._action$.pipe(
    ofType(fromAuthActions.AuthActionTypes.AUTO_LOGIN),
    map(() => {
      let userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return { type: 'Dummy data' };
      }
      userData = { ...userData, redirect: false };
      let loadUser = new User(userData);

      return new fromAuthActions.AuthenticateSuccess(loadUser);
    })
  );

  @Effect({ dispatch: false })
  authRedirect = this._action$.pipe(
    ofType(fromAuthActions.AuthActionTypes.AUTHENTICATE_SUCCESS),
    tap((authSuccesAction: fromAuthActions.AuthenticateSuccess) => {
      if (authSuccesAction.payload.redirect) {
        this._router.navigate(['/']);
      }
    })
  );

  @Effect({ dispatch: false })
  autoLogout = this._action$.pipe(
    ofType(fromAuthActions.AuthActionTypes.LOGOUT),
    tap(() => {
      this._snackBar.open({
        message: 'Logout successfuly!'
      });
      localStorage.removeItem('userData');
      localStorage.removeItem('session_id');
      this._router.navigate(['login']);
    })
  );

  constructor(
    private _action$: Actions,
    private _authService: AuthService,
    private _router: Router,
    private _snackBar: SnackBarService
  ) {}
}

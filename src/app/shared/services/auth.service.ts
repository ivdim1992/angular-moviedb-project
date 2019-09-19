import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { MOVIEDB } from 'src/app/app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public _afAuth: AngularFireAuth,
    public _router: Router,
    private _snackBar: SnackBarService,
    private _http: HttpClient
  ) {}

  startLogin(credentials): Observable<any> {
    const url = `https://api.themoviedb.org/3/authentication/token/new?api_key=${MOVIEDB.APP_KEY}`;
    return this._http.get(url).pipe(
      switchMap(response => {
        let token = response['request_token'];
        return this.getSessionWithCredentials(credentials, token).pipe(
          switchMap(validToken => {
            let token = validToken['request_token'];
            return this.getSession(token);
          })
        );
      })
    );
  }

  setSession(session) {
    if (!session) {
      localStorage.setItem('session_id', null);
    }
    localStorage.setItem('session_id', session);
  }

  getSession(token) {
    const url = `https://api.themoviedb.org/3/authentication/session/new?api_key=${MOVIEDB.APP_KEY}`;
    const body = { request_token: token };
    return this._http.post(url, body);
  }

  getSessionWithCredentials(credentials, token): Observable<any> {
    const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${MOVIEDB.APP_KEY}`;
    const { username, password } = credentials;
    const body = { request_token: token, username: username, password: password };
    return this._http.post(url, body);
  }

  getSessionLocalstore(): string {
    let session = localStorage.getItem('session_id');
    if (!session) {
      return null;
    }
    return session;
  }

  setUserLocalstore(user) {
    if (!user) {
      localStorage.setItem('user', null);
    }
    localStorage.setItem('user', user);
  }

  logout() {
    localStorage.clear();
    this._router.navigate(['login']);
    this._snackBar.open({
      message: 'Logout successfuly!'
    });
  }
}

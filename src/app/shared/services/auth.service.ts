import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models';
import { APP_CONFIG } from 'src/app/injection-token';
import { IAppConfig } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(APP_CONFIG) private _appConfig: IAppConfig, private _router: Router, private _http: HttpClient) {}

  startLogin(credentials): Observable<any> {
    const url = `${this._appConfig.BASE_URL}authentication/token/new?`;
    return this._http.get(url).pipe(
      switchMap(response => {
        let token = response['request_token'];
        return this.getSessionWithCredentials(credentials, token).pipe(
          switchMap(token => {
            return this.getSession(token).pipe(
              switchMap(res => {
                let session = res['session_id'];
                this.setSession(session);
                return this.getCurrentUser(session);
              })
            );
          })
        );
      })
    );
  }

  getCurrentUser(session) {
    const url = `${this._appConfig.BASE_URL}account?session_id=${session}`;
    return this._http.get<IUser>(url);
  }

  private setSession(session) {
    if (!session) {
      localStorage.setItem('session_id', null);
    }
    localStorage.setItem('session_id', session);
  }

  private getSession(token): Observable<{}> {
    const url = `${this._appConfig.BASE_URL}authentication/session/new?`;
    const body = { request_token: token };
    return this._http.post(url, body);
  }

  private getSessionWithCredentials(credentials, token): Observable<{}> {
    const url = `${this._appConfig.BASE_URL}authentication/token/validate_with_login?`;
    const { username, password } = credentials;
    const body = { request_token: token, username: username, password: password };
    return this._http.post(url, body).pipe(map(res => res['request_token']));
  }

  getSessionLocalstore(): string {
    let session = localStorage.getItem('session_id');
    if (!session) {
      return null;
    }
    return session;
  }
}

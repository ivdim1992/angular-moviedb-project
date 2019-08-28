import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services';
import { MOVIEDB } from 'src/app/app.config';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthInterceptor {
  sessionID$ = new BehaviorSubject<string>(null);
  token$ = new BehaviorSubject<any>(null);
  constructor(public _authService: AuthService, private _router: ActivatedRoute) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(MOVIEDB.BASE_URL)) {
      //   req.params.append('api_key', MOVIEDB.APP_KEY);
      //   req.params.append('session_id', this._authService.getSessionLocalstore());
      req.params.set('api_key', MOVIEDB.APP_KEY);
      req.params.set('session_id', this._authService.getSessionLocalstore());
      return next.handle(req);
    }
  }
}

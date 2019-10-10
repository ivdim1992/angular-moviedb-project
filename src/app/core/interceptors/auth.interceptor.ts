import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services';
import { IAppConfig } from 'src/app/app.config';
import { APP_CONFIG } from 'src/app/injection-token';

@Injectable()
export class AuthInterceptor {
  sessionID = this._authService.getSessionLocalstore();
  token$ = new BehaviorSubject<any>(null);
  constructor(@Inject(APP_CONFIG) private _appConfig: IAppConfig, private _authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newParams = new HttpParams();

    if (this.sessionID) {
      newParams = newParams.append('session_id', this.sessionID);
    }
    newParams = newParams.append('api_key', this._appConfig.APP_KEY);

    if (req.url.startsWith(this._appConfig.BASE_URL)) {
      let reqCloned = req.clone({
        params: newParams
      });
      return next.handle(reqCloned);
    }
  }
}

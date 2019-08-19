import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { AuthService } from 'src/app/login/services/auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, first } from 'rxjs/operators';
import { movieDB } from '../enums';
import { async } from 'q';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public _authService: AuthService) {}
  token: string;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this._authService
    //   .getToken()
    //   .pipe(first())
    //   .subscribe(data => {
    //     if (data) {
    //       this.token = data;
    //     }
    //   });
    // let newHeaders = { 'Content-Type': 'application-json', Authorization: `${movieDB.APP_KEY}` };

    // if (this.token && !req.url.startsWith(movieDB.BASE_URL)) {
    //   console.log('here');
    //   newHeaders = {
    //     'Content-Type': 'application-json',
    //     Authorization: `Bearer ${this.token}`
    //   };
    // }

    return next.handle(req.clone());
  }
}

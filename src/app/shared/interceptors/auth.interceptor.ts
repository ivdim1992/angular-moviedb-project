import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpEventType, HttpResponse } from '@angular/common/http';
import { AuthService } from 'src/app/login/services/auth.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public _authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this._authService.getToken()}`,
      'WEB-API-key': environment.firebase.apiKey,
      'Content-Type': 'application/json'
    })

    const reqClone = req.clone();
    return next.handle(reqClone);
  }
}

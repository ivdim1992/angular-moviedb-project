import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/login/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): Observable<boolean> {
    console.log(this._authService.hasLoggedUser());
    if (this._authService.hasLoggedUser()) {
      return of(true);
    }

    this._router.navigate(['login']);
    return of(false);
  }
}

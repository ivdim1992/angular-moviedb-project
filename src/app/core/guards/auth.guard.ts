import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/shared/services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): Observable<boolean> {
    if (this._authService.hasLoggedUser()) {
      return of(true);
    }

    this._router.navigate(['login']);
    return of(false);
  }
}

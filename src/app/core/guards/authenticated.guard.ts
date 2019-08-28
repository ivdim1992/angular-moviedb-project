import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/shared/services';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(): Observable<boolean> {
    if (this._authService.getSessionLocalstore()) {
      this._router.navigate(['/']);
      return of(false);
    }

    return of(true);
  }
}

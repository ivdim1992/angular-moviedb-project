import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import * as fromAuthSelectors from '../../login/store/auth.selectors';
import * as fromAppStore from '../../store/store.reducer';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private _store: Store<fromAppStore.AppState>, private _router: Router) {}

  isLogged: Observable<boolean> = this._store.select(fromAuthSelectors.selectIsLogged);
  authenticated: boolean;

  canActivate(): Observable<boolean> {
    this.isLogged.pipe(take(1)).subscribe(isLoggedVal => {
      this.authenticated = isLoggedVal;
    });

    if (this.authenticated) {
      this._router.navigate(['/']);
      return of(false);
    }
    return of(true);
  }
}

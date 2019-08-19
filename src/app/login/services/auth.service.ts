import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _destroyed$ = new Subject<boolean>();
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  currentUser: User;

  constructor(public _afAuth: AngularFireAuth, public _router: Router, private _snackBar: SnackBarService) {
    this._afAuth.authState.pipe(takeUntil(this._destroyed$)).subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  fetchCurrentUser(): Observable<User> {
    return this._afAuth.authState;
  }

  hasLoggedUser(): boolean {
    return !!this.currentUser;
  }

  login(name: string, password: string) {
    this.isAuthenticated$.next(true);
    return this._afAuth.auth.signInWithEmailAndPassword(name, password);
  }

  getToken(): Observable<string> {
    return this._afAuth.idToken;
  }

  logout() {
    this._afAuth.auth
      .signOut()
      .then(_ => {
        this.isAuthenticated$.next(false);
        localStorage.removeItem('email');
        this._router.navigate(['/']);
        this._snackBar.open({
          message: 'Logout successfuly!'
        });
      })
      .catch(err => {
        this._snackBar.open({
          message: 'We are having troubles logging you out!'
        });
      });
  }
}

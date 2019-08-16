import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(public _afAuth: AngularFireAuth, public _router: Router) {
    const authenticated = !!localStorage.getItem('user');
    this.isAuthenticated$.next(authenticated);
  }

  getCurrentUser(): Observable<User> {
    return this._afAuth.authState;
  }

  login(email: string, password: string) {
    this.isAuthenticated$.next(true);
    return this._afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public getToken(): string {
    let token: string;
    this._afAuth.idToken.subscribe(idToken => (token = idToken));
    return token;
  }

  logout() {
    this._afAuth.auth.signOut();
    this.isAuthenticated$.next(false);
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }
}

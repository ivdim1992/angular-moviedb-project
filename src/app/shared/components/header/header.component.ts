import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';
import { User } from 'firebase';
import { first } from 'rxjs/internal/operators/first';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'moviedb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _autService: AuthService) {}

  currentUser: User;
  //   isAutheticated$: Observable<boolean>;
  isLoggedIn: Boolean;
  userEmail: string;

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user')).user;
    this._autService.isAuthenticated$.subscribe(state => (this.isLoggedIn = state));
  }

  logoutUser() {
    this._autService.logout();
  }
}

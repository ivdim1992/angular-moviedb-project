import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { AuthService } from 'src/app/login/services/auth.service';
import { User } from 'firebase';
import { first } from 'rxjs/internal/operators/first';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';

@Component({
  selector: 'moviedb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor(private _autService: AuthService) { }
  isAuthenticated$: Observable<boolean>;
  userEmail: string;

  ngDoCheck() {
    this.userEmail = localStorage.getItem('email');
    this.isAuthenticated$ = this._autService.isAuthenticated$;

  }

  ngOnInit() { }

  logoutUser() {
    this._autService.logout();
  }
}

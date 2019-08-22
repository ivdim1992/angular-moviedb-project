import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'moviedb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(private _autService: AuthService) {}

  isAuthenticated$: Observable<boolean>;
  userEmail: string;
  ngDoCheck() {
    this.userEmail = localStorage.getItem('email');
    this.isAuthenticated$ = this._autService.isAuthenticated$;
  }

  ngOnInit() {}

  logoutUser() {
    this._autService.logout();
  }
}

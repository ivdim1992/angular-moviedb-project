import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'moviedb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  constructor(private _autService: AuthService) {}

  session: string;

  ngDoCheck() {
    this.session = localStorage.getItem('session_id');
  }
  ngOnInit() {}

  logoutUser() {
    this._autService.logout();
  }
}

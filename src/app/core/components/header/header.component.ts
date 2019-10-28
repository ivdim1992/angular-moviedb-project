import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as fromAppStore from '@appStore/store.reducer';
import * as fromAuthActions from '@authStore/auth.actions';
import * as fromAuthSelectors from '@authStore/auth.selectors';

@Component({
  selector: 'moviedb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) { }

  isLogged: Observable<boolean> = this._store.select(fromAuthSelectors.selectIsLogged);

  ngOnInit() { }

  logoutUser() {
    this._store.dispatch(new fromAuthActions.Logout());
  }
}

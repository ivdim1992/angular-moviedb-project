import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './constants/route-animation';
import { Store } from '@ngrx/store';
import * as fromAppStore from '@appStore/store.reducer';
import * as fromAuthActions from '@authStore/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) {}
  appTheme = 'default';
  title = 'moviedb-project';

  ngOnInit() {
    this._store.dispatch(new fromAuthActions.AutoLogin());
  }

  switchTheme(appTheme: string) {
    this.appTheme = appTheme;
  }
}

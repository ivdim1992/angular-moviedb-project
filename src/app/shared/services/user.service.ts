import { Injectable, Inject } from '@angular/core';
import { Movie } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, exhaustMap, take } from 'rxjs/operators';

import * as fromAppStore from '@appStore/store.reducer';
import * as fromAuthSelectors from '@authStore/auth.selectors';

import { Store } from '@ngrx/store';
import { APP_CONFIG } from 'src/app/injection-token';
import { IAppConfig } from 'src/app/app.config';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = this._store.select(fromAuthSelectors.selectUser);
  constructor(
    @Inject(APP_CONFIG) private _appConfig: IAppConfig,
    private _http: HttpClient,
    private _store: Store<fromAppStore.AppState>
  ) {}

  addToFavorites(movieID) {
    return this.currentUser.pipe(
      take(1),
      exhaustMap(user => {
        const body = { media_type: 'movie', media_id: movieID, favorite: true };
        const url = `${this._appConfig.BASE_URL}account/${user.id}/favorite?`;
        return this._http.post(url, body);
      })
    );
  }

  getFavoriteMovies(): Observable<Movie[]> {
    return this.currentUser.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return;
        }
        const url = `${this._appConfig.BASE_URL}account/${user.id}/favorite/movies?&sort_by=created_at.asc&page=1`;
        return this._http.get<Array<Movie>>(url).pipe(map(input => input['results'].map(movies => new Movie(movies))));
      })
    );
  }
}

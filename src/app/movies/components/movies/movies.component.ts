import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Movie } from 'src/app/shared/models';

import * as fromMoviesActions from '@movieStore/movies.actions';
import * as moviesSelector from '@movieStore/movies.selectors';
import * as fromAppStore from '@appStore/store.reducer';

@Component({
  selector: 'moviedb-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  popularMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectAllPopularMovies);

  topRatedMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectAllTopRatedMovies);

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetPopularMovies({ page: 1 }));
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies({ page: 1 }));
  }
}

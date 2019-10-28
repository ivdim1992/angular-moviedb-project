import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { Store } from '@ngrx/store';

import * as moviesSelector from '@movieStore/movies.selectors';
import * as fromMoviesActions from '@movieStore/movies.actions';
import * as fromAppStore from '@appStore/store.reducer';

@Component({
  selector: 'moviedb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  popularMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectAllPopularMovies);

  isLoading$: Observable<boolean> = this._store.select(moviesSelector.selectLoadingProp);

  ngOnInit() {}

  onScroll() {
    this._store.dispatch(new fromMoviesActions.GetPopularMovies({ page: 2 }));
  }
}

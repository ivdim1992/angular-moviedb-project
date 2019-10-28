import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { Store } from '@ngrx/store';

import * as moviesSelector from '@movieStore/movies.selectors';
import * as fromMoviesActions from '@movieStore/movies.actions';
import * as fromAppStore from '@appStore/store.reducer';

@Component({
  selector: 'moviedb-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  topRatedMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectAllTopRatedMovies);
  isLoading$: Observable<boolean> = this._store.select(moviesSelector.selectLoadingProp);

  ngOnInit() {}

  onScroll() {
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies({ page: 2 }));
  }
}

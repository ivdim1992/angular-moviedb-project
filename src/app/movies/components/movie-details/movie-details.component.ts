import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieDetails } from 'src/app/shared/models';

import * as moviesSelector from '@movieStore/movies.selectors';
import * as fromAppStore from '@appStore/store.reducer';

@Component({
  selector: 'moviedb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieDetails$: Observable<MovieDetails> = this._store.select(moviesSelector.selectMovieDetails);
  isLoading: Observable<boolean> = this._store.select(moviesSelector.selectLoadingProp);

  constructor(private _store: Store<fromAppStore.AppState>) {}

  ngOnInit() {}
}

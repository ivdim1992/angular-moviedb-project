import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie, MovieDetails } from 'src/app/shared/models';

import * as fromMoviesActions from '../../store/movies.actions';
import * as moviesSelector from '../../store/movies.selectors';
import * as fromAppStore from '../../../store/store.reducer';

@Component({
  selector: 'moviedb-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  movieDetails$: Observable<MovieDetails> = this._store.select(moviesSelector.selectMovieDetails);
  isLoading: boolean;
  subscription: Subscription;

  constructor(private _store: Store<fromAppStore.AppState>) {}

  ngOnInit() {
    this.subscription = this._store.select(moviesSelector.selectLoadingProp).subscribe(loadingVal => {
      this.isLoading = loadingVal;
    });
    this._store.dispatch(new fromMoviesActions.GetMovieDetails());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

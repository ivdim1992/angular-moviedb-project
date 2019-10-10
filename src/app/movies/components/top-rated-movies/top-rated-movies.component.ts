import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as moviesSelector from '../../store/movies.selectors';
import * as fromAppStore from '../../../store/store.reducer';
import * as fromMoviesActions from '../../store/movies.actions';

@Component({
  selector: 'moviedb-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  topRatedMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectTopRatedMovies);
  isLoading: boolean;
  subscription: Subscription;
  page: number = 1;

  ngOnInit() {
    this.subscription = this._store.select(moviesSelector.selectLoadingProp).subscribe(loadingVal => {
      this.isLoading = loadingVal;
    });
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies(1));
  }

  onScroll() {
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies(++this.page));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

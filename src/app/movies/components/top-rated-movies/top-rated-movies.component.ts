import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
export class TopRatedMoviesComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  topRatedMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectTopRatedMovies);
  isLoading: boolean;
  subscription: Subscription;
  page: number;

  ngOnInit() {
    this.subscription = this._store.select(moviesSelector.selectLoadingProp).subscribe(loadingVal => {
      this.isLoading = loadingVal;
    });
    this.page = 2;
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies(this.page));
  }

  onScroll() {
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies(++this.page));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
export class PopularMoviesComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<fromAppStore.AppState>) {}

  popularMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectPopularMovies);
  isLoading: Observable<boolean> = this._store.select(moviesSelector.selectLoadingProp);
  subscription: Subscription;
  page: number;

  ngOnInit() {
    this.page = 2;
    this._store.dispatch(new fromMoviesActions.GetPopularMovies(this.page));
  }

  onScroll() {
    console.log('on bottom');
    this._store.dispatch(new fromMoviesActions.GetPopularMovies(++this.page));
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}

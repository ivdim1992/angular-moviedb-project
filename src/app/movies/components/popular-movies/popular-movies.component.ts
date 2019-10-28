import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Movie } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import * as moviesSelector from '../../store/movies.selectors';
import * as fromAppStore from '../../../store/store.reducer';
import * as fromMoviesActions from '../../store/movies.actions';

@Component({
  selector: 'moviedb-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent implements OnInit, OnDestroy {
  constructor(private _store: Store<fromAppStore.AppState>) { }

  popularMovies$: Observable<Movie[]> = this._store.select(moviesSelector.seleselectPop);
  isLoading: boolean;
  subscription: Subscription;
  page: number;

  ngOnInit() {
    this.subscription = this._store.select(moviesSelector.selectLoadingProp).subscribe(loadingVal => {
      this.isLoading = loadingVal;
    });
    this.page = 2;
    this._store.dispatch(new fromMoviesActions.GetPopularMovies(this.page));
  }

  onScroll() {
    console.log('on bottom');
    this._store.dispatch(new fromMoviesActions.GetPopularMovies(++this.page));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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

  popularMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectPopularMovies);
  topRatedMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectTopRatedMovies);
  //   myFavoriteMovies$: Observable<Movie[]> = this._store.select(moviesSelector.selectFavoriteMovies);
  //   favoriteMoviesIds: number[] = [];
  //   favoriteSub: Subscription;

  ngOnInit() {
    this._store.dispatch(new fromMoviesActions.GetPopularMovies(1));
    this._store.dispatch(new fromMoviesActions.GetTopRatedMovies(1));
    // this._store.dispatch(new fromMoviesActions.GetFavoriteMovies());

    // this.favoriteSub = this.myFavoriteMovies$.subscribe(movies => {
    //   if (!movies) {
    //     return null;
    //   } else {
    //     return movies.map(movie => this.favoriteMoviesIds.push(movie.id));
    //   }
    // });
  }

  //   ngOnDestroy() {
  //     this.favoriteSub.unsubscribe();
  //   }
}

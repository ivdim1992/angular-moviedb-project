import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';

import * as fromRouterSelectors from '../../store/index';
import * as fromMoviesActions from './movies.actions';

import { of } from 'rxjs';
import { MovieService } from '../shared/services';
import { UserService, SnackBarService } from 'src/app/shared/services';

const handleError = (errorRes: any) => {
  console.error(errorRes);
  return of('Dummy');
};

@Injectable()
export class MoviesEffects {
  @Effect()
  getPopularMovies$ = this._actions$.pipe(
    ofType(fromMoviesActions.MoviesActionTypes.GET_POPULAR_MOVIES),
    switchMap((action: fromMoviesActions.GetPopularMovies) => {
      return this._movieService.getPopularMovies(action.payload.page).pipe(
        map(movies => new fromMoviesActions.GetPopularMoviesSuccess({ popularMovies: movies })),
        catchError(errRes => handleError(errRes))
      );
    })
  );

  @Effect()
  getTopRated = this._actions$.pipe(
    ofType(fromMoviesActions.MoviesActionTypes.GET_TOP_RATED_MOVIES),
    switchMap((action: fromMoviesActions.GetTopRatedMovies) => {
      return this._movieService.getTopRatedMovies(action.payload.page).pipe(
        map(movies => new fromMoviesActions.GetTopRatedMoviesSuccess({ topRatedMovies: movies })),
        catchError(errRes => handleError(errRes))
      );
    })
  );

  @Effect()
  getSearchedMovies = this._actions$.pipe(
    ofType(fromMoviesActions.MoviesActionTypes.GET_SEARCHED_MOVIES),
    withLatestFrom(this._store.select(fromRouterSelectors.selectRouter)),
    switchMap(([payload, routerParams]) => {
      let query = routerParams.state.queryParams.search;

      return this._movieService.searchMovie(query).pipe(
        map(movies => new fromMoviesActions.GetSearchedMoviesSuccess({ searchedMovies: movies })),
        catchError(errRes => handleError(errRes))
      );
    })
  );

  @Effect()
  getFavoriteMovies = this._actions$.pipe(
    ofType(fromMoviesActions.MoviesActionTypes.GET_FAVORITE_MOVIES),
    switchMap((action: fromMoviesActions.GetFavoriteMovies) => {
      return this._userServie
        .getFavoriteMovies()
        .pipe(
          map(
            movies => new fromMoviesActions.GetFavoriteMoviesSuccess({ favoriteMovies: movies }),
            catchError(errRes => handleError(errRes))
          )
        );
    })
  );

  @Effect()
  getMovieDetails = this._actions$.pipe(
    ofType(fromMoviesActions.MoviesActionTypes.GET_MOVIE_DETAILS),
    switchMap((action: fromMoviesActions.GetMovieDetails) => {
      const id = action.payload.movieId;
      return this._movieService.getMovieDetails(id).pipe(
        map(movie => new fromMoviesActions.GetMovieDetailsSuccess({ movieDetails: movie })),
        catchError(errRes => handleError(errRes))
      );
    })
  );

  constructor(
    private _actions$: Actions,
    private _movieService: MovieService,
    private _userServie: UserService,
    private _store: Store<fromRouterSelectors.State>,
    private _snackBar: SnackBarService
  ) {}
}

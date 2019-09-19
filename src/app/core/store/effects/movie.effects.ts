import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError, share } from 'rxjs/operators';

import {
  MoviesActions,
  MoviesActionTypes,
  LoadPopularMoviesSuccess,
  LoadTopRatedMoviesSuccess,
  LoadPopularMoviesFailed,
  LoadTopRatedMoviesFailed
  //   LoadFavoriteMoviesSuccess,
  //   LoadFavoriteMoviesFailed
} from '../actions/movie.actions';
import { MovieService } from 'src/app/movies/shared/services';
import { UserService } from 'src/app/shared/services';

@Injectable()
export class MovieEffects {
  constructor(private _actions$: Actions, private _movieService: MovieService, private _userService: UserService) {}

  @Effect()
  loadPopularMovies$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MoviesActionTypes.LoadPopularMovies),
      mergeMap(() =>
        this._movieService.getPopularMovies().pipe(
          map(movies => new LoadPopularMoviesSuccess(movies)),
          catchError(() => of(new LoadPopularMoviesFailed('Something went wrong')))
        )
      )
    )
  );

  @Effect()
  loadTopRatedMovies$ = createEffect(() =>
    this._actions$.pipe(
      ofType(MoviesActionTypes.LoadTopRatedMovies),
      mergeMap(() =>
        this._movieService.getTopRatedMovies().pipe(
          map(movies => new LoadTopRatedMoviesSuccess(movies)),
          catchError(() => of(new LoadTopRatedMoviesFailed('Something went wrong')))
        )
      )
    )
  );

  //   @Effect()
  //   loadFavoriteMovies$ = createEffect(() =>
  //     this._actions$.pipe(
  //       ofType(MoviesActionTypes.LoadFavoriteMovies),
  //       mergeMap(() =>
  //         this._userService.getFavoriteMovies().pipe(
  //           map(movies => new LoadFavoriteMoviesSuccess(movies)),
  //           catchError(() => of(new LoadFavoriteMoviesFailed('Something went wrong')))
  //         )
  //       )
  //     )
  //   );
}

import { Action } from '@ngrx/store';
import { Movie } from 'src/app/shared/models';

export enum MoviesActionTypes {
  LoadPopularMovies = '[PopularMovies] Load PopularMovies',
  LoadPopularMoviesSuccess = '[PopularMovies] Load PopularMovies Success',
  LoadPopularMoviesFailed = '[PopularMovies] Load PopularMovies Failed',

  LoadTopRatedMovies = '[TopRatedMovies] Load TopRatedMovies',
  LoadTopRatedMoviesSuccess = '[TopRatedMovies] Load TopRatedMovies Success',
  LoadTopRatedMoviesFailed = '[TopRatedMovies] Load TopRatedMovies Failed'

  //   LoadFavoriteMovies = '[FavoriteMovies] Load FavoriteMovies',
  //   LoadFavoriteMoviesSuccess = '[FavoriteMovies] Load FavoriteMovies Success',
  //   LoadFavoriteMoviesFailed = '[FavoriteMovies] Load FavoriteMovies Failed'
}

export class LoadPopularMovies implements Action {
  readonly type = MoviesActionTypes.LoadPopularMovies;
}

export class LoadPopularMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.LoadPopularMoviesSuccess;

  constructor(public payload: Movie[]) {}
}

export class LoadPopularMoviesFailed implements Action {
  readonly type = MoviesActionTypes.LoadPopularMoviesFailed;

  constructor(public payload: string) {}
}

export class LoadTopRatedMovies implements Action {
  readonly type = MoviesActionTypes.LoadTopRatedMovies;
}

export class LoadTopRatedMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.LoadTopRatedMoviesSuccess;

  constructor(public payload: Movie[]) {}
}

export class LoadTopRatedMoviesFailed implements Action {
  readonly type = MoviesActionTypes.LoadTopRatedMoviesFailed;

  constructor(public payload: string) {}
}

// export class LoadFavoriteMovies implements Action {
//   readonly type = MoviesActionTypes.LoadFavoriteMovies;
// }

// export class LoadFavoriteMoviesSuccess implements Action {
//   readonly type = MoviesActionTypes.LoadFavoriteMoviesSuccess;

//   constructor(public payload: Movie[]) {}
// }

// export class LoadFavoriteMoviesFailed implements Action {
//   readonly type = MoviesActionTypes.LoadFavoriteMoviesFailed;

//   constructor(public payload: string) {}
// }

export type MoviesActions =
  | LoadPopularMovies
  | LoadPopularMoviesSuccess
  | LoadPopularMoviesFailed
  | LoadTopRatedMovies
  | LoadTopRatedMoviesSuccess
  | LoadTopRatedMoviesFailed;
//   | LoadFavoriteMovies
//   | LoadFavoriteMoviesSuccess
//   | LoadFavoriteMoviesFailed;

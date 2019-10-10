import { Movie, MovieDetails } from 'src/app/shared/models';
import { Action } from '@ngrx/store';

export enum MoviesActionTypes {
  GET_POPULAR_MOVIES = '[Movies] Get Popular Movies',
  GET_POPULAR_MOVIES_SUCCESS = '[Movies] Get Popular Movies Success',
  GET_TOP_RATED_MOVIES = '[Movies] Get Top Rated Movies',
  GET_TOP_RATED_MOVIES_SUCCESS = '[Movies] Get Top Rated Movies Success',
  GET_SEARCHED_MOVIES = '[Movies] Get Searched Movies',
  GET_SEARCHED_MOVIES_SUCCESS = '[Movies] Get Searched Movies Success',
  GET_MOVIE_DETAILS = '[Movies] Get Movie Details',
  GET_MOVIE_DETAILS_SUCCESS = '[Movie] Get Movie Details Success',
  GET_FAVORITE_MOVIES = '[Movie] Get Favorite Movies',
  GET_FAVORITE_MOVIES_SUCCESS = '[Movie] Get Favorite Movies Success'
}

export class GetFavoriteMovies implements Action {
  readonly type = MoviesActionTypes.GET_FAVORITE_MOVIES;
}

export class GetFavoriteMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.GET_FAVORITE_MOVIES_SUCCESS;

  constructor(public payload: Movie[]) {}
}

export class GetPopularMovies implements Action {
  readonly type = MoviesActionTypes.GET_POPULAR_MOVIES;

  constructor(public payload: number) {}
}

export class GetPopularMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.GET_POPULAR_MOVIES_SUCCESS;

  constructor(public payload: Movie[]) {}
}

export class GetTopRatedMovies implements Action {
  readonly type = MoviesActionTypes.GET_TOP_RATED_MOVIES;

  constructor(public payload: number) {}
}

export class GetTopRatedMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.GET_TOP_RATED_MOVIES_SUCCESS;

  constructor(public payload: Movie[]) {}
}

export class GetSearchedMovies implements Action {
  readonly type = MoviesActionTypes.GET_SEARCHED_MOVIES;
}

export class GetSearchedMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.GET_SEARCHED_MOVIES_SUCCESS;
  constructor(public payload: Movie[]) {}
}

export class GetMovieDetails implements Action {
  readonly type = MoviesActionTypes.GET_MOVIE_DETAILS;
}

export class GetMovieDetailsSuccess implements Action {
  readonly type = MoviesActionTypes.GET_MOVIE_DETAILS_SUCCESS;

  constructor(public payload: MovieDetails) {}
}

export type MoviesActions =
  | GetPopularMovies
  | GetPopularMoviesSuccess
  | GetTopRatedMovies
  | GetTopRatedMoviesSuccess
  | GetSearchedMovies
  | GetSearchedMoviesSuccess
  | GetMovieDetails
  | GetMovieDetailsSuccess
  | GetFavoriteMovies
  | GetFavoriteMoviesSuccess;

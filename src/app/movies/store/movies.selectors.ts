import * as fromMoviesReducer from './movies.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectMovies = createFeatureSelector<fromMoviesReducer.MovieState>('movies');
// POPULAR MOVIES
export const selectPopularMoviesState = createSelector(
  selectMovies,
  fromMoviesReducer.selectPopularMoviesState
);

export const selectAllPopularMovies = createSelector(
  selectPopularMoviesState,
  fromMoviesReducer.selectAllPopularMovies
);

//Top Rated Movies
export const selectTopRatedMoviesState = createSelector(
  selectMovies,
  fromMoviesReducer.selectTopRatedMoviesState
);

export const selectAllTopRatedMovies = createSelector(
  selectTopRatedMoviesState,
  fromMoviesReducer.selectAllTopRatedMovies
);

//FAVORITE MOVIES
export const selectFavoriteMoviesState = createSelector(
  selectMovies,
  fromMoviesReducer.selectFavoriteMoviesState
);

export const selectAllFavoriteMovies = createSelector(
  selectFavoriteMoviesState,
  fromMoviesReducer.selectAllFavoriteMovies
);

export const selectFavoriteMoviesIds = createSelector(
  selectFavoriteMoviesState,
  fromMoviesReducer.favoriteMoviesIds
);

export const selectSearchedMovies = createSelector(
  selectMovies,
  state => state.searchMovies
);

export const selectLoadingProp = createSelector(
  selectMovies,
  state => state.loading
);

export const selectMovieDetails = createSelector(
  selectMovies,
  state => state.movieDetails
);

export const selectFavoriteMovies = createSelector(
  selectMovies,
  state => state.favoriteMovies
);

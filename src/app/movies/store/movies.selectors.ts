import * as fromAppStore from '../../store/store.reducer';
import * as fromMoviesReducer from './movies.reducer';

import { createSelector } from '@ngrx/store';

export const selectMovies = (state: fromAppStore.AppState) => state.movies;

export const selectPopularMovies = createSelector(
  selectMovies,
  (state: fromMoviesReducer.MovieState) => state.popularMovies
);

export const selectTopRatedMovies = createSelector(
  selectMovies,
  (state: fromMoviesReducer.MovieState) => state.topRatedMovies
);

export const selectSearchedMovies = createSelector(
  selectMovies,
  (state: fromMoviesReducer.MovieState) => state.searchMovies
);

export const selectLoadingProp = createSelector(
  selectMovies,
  (state: fromMoviesReducer.MovieState) => state.loading
);

export const selectMovieDetails = createSelector(
  selectMovies,
  (state: fromMoviesReducer.MovieState) => state.movieDetails
);

export const selectFavoriteMovies = createSelector(
  selectMovies,
  (state: fromMoviesReducer.MovieState) => state.favoriteMovies
);

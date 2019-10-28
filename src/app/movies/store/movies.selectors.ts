import * as fromMoviesReducer from './movies.reducer';

import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectMovies = createFeatureSelector<fromMoviesReducer.MovieState>('movies');
export const selectPopularMoviesState = (state: fromMoviesReducer.MovieState) => state.popularMovies;

export const {
  selectIds,
  selectEntities,
  selectAll: popular,
  selectTotal,
} = fromMoviesReducer.popularMoviesAdapter.getSelectors();


export const selectPopularMovies = createSelector(
  selectMovies,
  movies => movies.popularMovies
)

export const seleselectPop = createSelector(
  selectPopularMovies,
  popular
)
export const selectTopRatedMovies = createSelector(
  selectMovies,
  state => state.topRatedMovies
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

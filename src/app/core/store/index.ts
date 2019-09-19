import * as fromReducer from './reducers/movie.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
  movies: fromReducer.MovieState;
}

export const reducers: ActionReducerMap<State> = {
  movies: fromReducer.movieReducers
};

export const selectMovieState = createFeatureSelector<fromReducer.MovieState>('movies');

export const selectPopularMovies = createSelector(
  selectMovieState,
  fromReducer.getPopularMovies
);

export const selectTopRatedMovies = createSelector(
  selectMovieState,
  fromReducer.getTopRatedMovies
);

// export const selectFavoriteMovies = createSelector(
//   selectMovieState,
//   fromReducer.getFavoriteMovies
// );

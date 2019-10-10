import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromMoviesReducer from '../movies/store/movies.reducer';
import * as fromAuthReducer from '../login/store/auth.reducer';

export interface AppState {
  movies: fromMoviesReducer.MovieState;
  auth: fromAuthReducer.UserState;
  router: RouterReducerState;
}

export const storeReducer: ActionReducerMap<AppState> = {
  movies: fromMoviesReducer.movieReducer,
  auth: fromAuthReducer.authReducer,
  router: routerReducer
};

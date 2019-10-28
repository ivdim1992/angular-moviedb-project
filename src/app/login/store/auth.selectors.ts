import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAuthReducer from '../store/auth.reducer';

export const selectAuth = createFeatureSelector<fromAuthReducer.UserState>('auth');

export const selectUser = createSelector(
  selectAuth,
  state => state.user
);

export const selectLoading = createSelector(
  selectAuth,
  state => state.loading
);

export const selectAuthError = createSelector(
  selectAuth,
  state => state.authError
);

export const selectIsLogged = createSelector(
  selectAuth,
  state => state.isLogged
);

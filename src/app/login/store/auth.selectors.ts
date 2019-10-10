import { createSelector } from '@ngrx/store';
import * as fromAppStore from '../../store/store.reducer';
import * as fromAuthReducer from '../store/auth.reducer';

export const selectAuth = (state: fromAppStore.AppState) => state.auth;

export const selectUser = createSelector(
  selectAuth,
  (state: fromAuthReducer.UserState) => state.user
);

export const selectLoading = createSelector(
  selectAuth,
  (state: fromAuthReducer.UserState) => state.loading
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: fromAuthReducer.UserState) => state.authError
);

export const selectIsLogged = createSelector(
  selectAuth,
  (state: fromAuthReducer.UserState) => state.isLogged
);

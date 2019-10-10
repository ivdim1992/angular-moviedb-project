import { User } from 'src/app/shared/models';
import * as fromAuthActions from './auth.actions';

export interface UserState {
  user: User;
  authError: string;
  loading: boolean;
  isLogged: boolean;
}

const intialState: UserState = {
  user: null,
  authError: null,
  loading: false,
  isLogged: false
};

export function authReducer(state = intialState, action: fromAuthActions.AuthActions) {
  switch (action.type) {
    case fromAuthActions.AuthActionTypes.AUTHENTICATE_SUCCESS:
      const input = { id: action.payload.id, username: action.payload.username };
      const user = new User(input);

      return {
        ...state,
        user,
        authError: null,
        loading: false,
        isLogged: true
      };

    case fromAuthActions.AuthActionTypes.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true,
        isLogged: false
      };

    case fromAuthActions.AuthActionTypes.AUTHENTICATE_FAILED:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false,
        isLogged: false
      };

    case fromAuthActions.AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        authError: null,
        isLogged: false
      };

    default:
      return state;
  }
}

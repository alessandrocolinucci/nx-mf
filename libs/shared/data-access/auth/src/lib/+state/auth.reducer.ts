import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../..';
import { AuthState, initialAuthState } from './auth.state';

const reducer = createReducer(
  initialAuthState,
  on(AuthActions.initAuth, (state) => ({
    ...state,
    initialAuthState,
  })),
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    currentUser: user,
    token: user.token,
    loading: false,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    currentUser: null,
    token: null,
    loading: false,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}

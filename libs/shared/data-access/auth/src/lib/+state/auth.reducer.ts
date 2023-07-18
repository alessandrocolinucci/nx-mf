import { Action, createReducer } from '@ngrx/store';
import { AuthState, initialAuthState } from './auth.state';

const reducer = createReducer(initialAuthState);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}

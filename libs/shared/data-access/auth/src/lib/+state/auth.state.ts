import { User } from '../models/user.model';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState {
  currentUser: User | null;
  token: string | null;
  loading: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialAuthState: AuthState = {
  currentUser: null,
  token: null,
  loading: false,
};

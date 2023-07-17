import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../models/user.model';

const AUTH_SOURCE = '[Auth/API]';

export const initAuth = createAction(AUTH_SOURCE + ' Init Auth');

export const login = createAction(AUTH_SOURCE + ' Login', props<{ credentials: Credentials }>());
export const loginSuccess = createAction(AUTH_SOURCE + ' Login Success', props<{ user: User }>());
export const loginFailure = createAction(AUTH_SOURCE + ' Login Failure', props<{ error: any }>());

export const logout = createAction(AUTH_SOURCE + ' Logout');
export const logoutSuccess = createAction(AUTH_SOURCE + ' Logout Success');
export const logoutFailure = createAction(AUTH_SOURCE + ' Logout Failure');

export const register = createAction(AUTH_SOURCE + ' Register', props<{ user: User }>());
export const registerSuccess = createAction(AUTH_SOURCE + ' Register Success');
export const registerFailure = createAction(AUTH_SOURCE + ' Register Failure');

export const loadUser = createAction(AUTH_SOURCE + ' Load User');
export const loadUserSuccess = createAction(AUTH_SOURCE + ' Load User Success', props<{ user: User }>());
export const loadUserFailure = createAction(AUTH_SOURCE + ' Load User Failure');

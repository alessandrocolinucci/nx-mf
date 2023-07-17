import { createAction, props } from '@ngrx/store';

const AUTH_SOURCE = '[Auth/API]';

export const initAuth = createAction('[Auth/API] Init Auth');
export const loadAuthSuccess = createAction('[Auth/API] Load Auth Success', props<{ auth: AuthEntity[] }>());
export const loadAuthFailure = createAction('[Auth/API] Load Auth Failure', props<{ error: any }>());

// login: '[Auth] Login',
// loginSuccess: '[Auth] Login Success',
// loginFailure: '[Auth] Login Failure',
// logout: '[Auth] Logout',
// logoutSuccess: '[Auth] Logout Success',
// logoutFailure: '[Auth] Logout Failure',
// register: '[Auth] Register',
// registerSuccess: '[Auth] Register Success',
// registerFailure: '[Auth] Register Failure',

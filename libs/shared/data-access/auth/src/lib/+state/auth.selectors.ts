import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);
export const selectCurrentUser = createSelector(selectAuthState, (state: AuthState) => state.currentUser);
export const selectIsLoading = createSelector(selectAuthState, (state: AuthState) => state.loading);

import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Credentials } from '../models/user.model';
import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { AuthState } from './auth.state';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  private readonly store$ = inject(Store<AuthState>);

  // SELECTORS
  currentUser$ = this.store$.pipe(select(AuthSelectors.selectCurrentUser));
  isLoading$ = this.store$.pipe(select(AuthSelectors.selectIsLoading));

  // ACTIONS
  init() {
    this.store$.dispatch(AuthActions.initAuth());
  }

  login(credentials: Credentials) {
    this.store$.dispatch(AuthActions.login({ credentials }));
  }
}

import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  currentUser$ = this.store.pipe(select(AuthSelectors.selectCurrentUser));
  isLoading$ = this.store.pipe(select(AuthSelectors.selectIsLoading));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AuthActions.initAuth());
  }
}

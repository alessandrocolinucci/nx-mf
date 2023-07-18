import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { AuthActions, AuthService, User } from '../..';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ credentials }) => {
        return this.authService.login(credentials).pipe(
          map((user: User | Error) => {
            if (user instanceof Error) {
              const error = user;
              return AuthActions.loginFailure({ error });
            }

            return AuthActions.loginSuccess({ user });
          })
        );
      })
    );
  });

  loginSuccess$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ user }) => {
          console.log('Show Notification', user);
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  loginFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure),
        tap(({ error }) => console.error(error))
      );
    },
    { dispatch: false }
  );
}

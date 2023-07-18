import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthFacade } from './+state/auth.facade';

export const authGuard: CanActivateFn = () => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);

  return authFacade.currentUser$.pipe(
    map((user) => {
      const isLoggedIn: boolean = !!user;
      if (!isLoggedIn) {
        router.navigate(['/login']);
        return false;
      }

      return true;
    })
  );
};

import { Route } from '@angular/router';
import { authGuard } from '@nx-mf/shared/data-access/auth';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    canActivate: [authGuard],
    component: DashboardComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('login/Routes').then((m) => m.appRoutes),
  },
];

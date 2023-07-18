import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthFacade } from '@nx-mf/shared/data-access/auth';

@Component({
  imports: [AsyncPipe, JsonPipe],
  standalone: true,
  selector: 'nx-mf-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  private readonly authFacade = inject(AuthFacade);
  readonly currentUser$ = this.authFacade.currentUser$;
}

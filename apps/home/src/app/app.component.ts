import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFacade, User } from '@nx-mf/shared/data-access/auth';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe, JsonPipe],
  selector: 'nx-mf-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly authFacade = inject(AuthFacade);
  readonly currentUser$: Observable<User | null> = this.authFacade.currentUser$;
}

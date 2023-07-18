import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthFacade, AuthModule, Credentials } from '@nx-mf/shared/data-access/auth';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'nx-mf-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PasswordModule, AuthModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  loginForm = this.formBuilder.group({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  login() {
    const credentials: Credentials = this.loginForm.value as Credentials;
    if (credentials.username && credentials.password) {
      this.authFacade.login(credentials);
    }
  }
}

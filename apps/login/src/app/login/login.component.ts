import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '@nx-mf/shared/data-access/auth';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'nx-mf-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PasswordModule],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private readonly formBuilder: NonNullableFormBuilder = inject(NonNullableFormBuilder);
  private readonly authService: AuthService = inject(AuthService);

  loginForm = this.formBuilder.group({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  isLoggedIn$ = this.authService.isUserLoggedIn$;

  login() {
    const credentials = this.loginForm.value;
    if (credentials.username && credentials.password) {
      this.authService.login(credentials.username, credentials.password);
    }
  }
}

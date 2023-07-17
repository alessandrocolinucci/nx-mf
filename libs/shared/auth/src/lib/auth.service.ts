import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const USERNAME = 'admin';
const PASSWORD = 'password';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isUserLoggedIn = new BehaviorSubject(false);
  isUserLoggedIn$ = this.isUserLoggedIn.asObservable();

  login(username: string, password: string): void {
    if (username === USERNAME && password === PASSWORD) {
      this.isUserLoggedIn.next(true);
    }
  }

  logout() {
    this.isUserLoggedIn.next(false);
  }
}

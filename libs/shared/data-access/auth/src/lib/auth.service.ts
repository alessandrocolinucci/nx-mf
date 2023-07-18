import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Credentials, User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly httpService = inject(HttpClient);

  login(credentials: Credentials): Observable<User | Error> {
    const url = '/assets/mock/users.json';
    return this.httpService.get<User[]>(url).pipe(
      map((users: User[] | undefined) => {
        const user = users?.find((u) => u.username === credentials.username && u.password === credentials.password);
        return user || Error('Wrong credentials ❌');
      })
    );
  }
}

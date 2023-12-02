import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable, map } from 'rxjs';
import { AuthLogin, AuthRegister } from '../../interfaces/Auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly httpClient: HttpClient) {}
  urlBack: string = environment.apiBackend || 'http://localhost:8080/';

  login(loginForm: AuthLogin): Observable<String> {
    return this.httpClient
      .post<Observable<String>>(`${this.urlBack}auth/login`, loginForm, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const { body } = response;
          const token = body?.token;
          return token;
        })
      );
  }

  register(registerForm: AuthRegister): Observable<String> {
    return this.httpClient
      .post<Observable<String>>(`${this.urlBack}auth/register`, registerForm, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const { body } = response;
          const token = body?.token;
          return token;
        })
      );
  }
}

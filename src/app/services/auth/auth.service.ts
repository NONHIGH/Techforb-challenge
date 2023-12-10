import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthLogin, AuthRegister } from '../../interfaces/Auth.interface';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookiesService: CookieService,
    private readonly routerNavigation: Router,
    private readonly toastrService:ToastrService
    ) {}
  urlBack: string = environment.apiBackend || 'http://localhost:8080/';

  login(loginForm: AuthLogin): Observable<String> {
    return this.httpClient
      .post<Observable<String | any>>(`${this.urlBack}auth/login`, loginForm, {
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

  logOut(){
    return this.httpClient.delete(`${this.urlBack}auth/logout`, {withCredentials: true})
    .pipe(
      map((response:any)=>{
        this.toastrService.info("Cerrando sesión", "LogOut");
        this.cookiesService.delete('session');
          return response
        })
      )

  }

}

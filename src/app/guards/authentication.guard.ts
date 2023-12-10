import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const toastService = inject(ToastrService);
  const authService = inject(AuthService);

  const cookie = document.cookie;

  const token = cookieService.get('session');
  const hasLogged = cookie.includes('session');
  if (token == 'undefined') {
    authService
      .logOut()
      .subscribe((value: any) => console.log(value, 'limpiando cookies'));
  }
  const router = new Router();
  if (hasLogged) {
    if (token && typeof token === 'string' && token.length > 10) {
      const tokenDecoded = jwtDecode(token);

      if (tokenDecoded?.exp) {
        if (tokenDecoded.exp < new Date().getTime() / 1000) {
          authService.logOut().subscribe((response) => {
            toastService.error(response?.message, 'Sesión expirada');
            console.log(response);
            router.navigate(['/login']);
          });
        }
      }
    }

    if (state.url.includes('login') || state.url.includes('register')) {
      router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
  if (state.url.includes('login') || state.url.includes('register')) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

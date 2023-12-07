import { CanActivateFn, CanDeactivateFn } from '@angular/router';
import {Router } from '@angular/router';
export const authenticationGuard: CanActivateFn = (route, state) => {
  
  const cookie = document.cookie;
  
    const hasLogged = cookie.includes('session');
    
    const router  = new Router();
    if (hasLogged) {
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

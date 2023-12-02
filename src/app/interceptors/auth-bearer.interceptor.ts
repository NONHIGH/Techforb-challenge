import { HttpInterceptorFn } from '@angular/common/http';

export const authBearerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

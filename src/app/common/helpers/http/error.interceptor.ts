import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  constructor(
    public router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(err => {

          switch (err.status) {
            case 401:
              // TODO: Unauthorized
              break;
            case 403:
              // TODO: Forbidden
              break;
            case 500:
              // TODO: Server Error
              break;
            default:
              break;
          }

          const error = err.error != null ? err.error.message : err.statusText || null;
          return throwError(error);
        }));
  }
}

import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthS } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {
  email = '';
  constructor(private as: AuthS) {
  }

  // Permite cargar un módulo de característica asíncrona Lazy Loading
  // Resolve: obtiene la data que el componente va a mostrar
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (route.data.role !== this.as.getRole()) {
        this.as.isAuthenticated();
        return false;
      }
      return this.as.isAuthenticated();
  }


}

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {
  constructor(private auth: AuthService,
              private router: Router) {
  }


  // Permite cargar un módulo de característica asíncrona Lazy Loading
  // Resolve: obtiene la data que el componente va a mostrar
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (route.data.role !== 'admin') {
        return false;
      }
      return this.checkIsAuthenticated();
  }

  checkIsAuthenticated(): boolean {
    let value = false;
    this.auth.isAuthenticated$.subscribe(val => value = val).unsubscribe();
    if (!value) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private auth: AuthService,
              private router: Router) {
  }
  // Permite a un usuario entrar a una ruta específica
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (route.data.role !== 'admin') {
        return false;
      }
      return this.checkIsAuthenticated();
  }
  // Permite a un usuario entrar a una ruta específica hija
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(childRoute, state);
  }
  // Determina si un usuario puede salir de una ruta específica. p.e un formulario si no ha guardado los cambios
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  // Permite cargar un módulo de característica asíncrona Lazy Loading
  // Resolve: obtiene la data que el componente va a mostrar
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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

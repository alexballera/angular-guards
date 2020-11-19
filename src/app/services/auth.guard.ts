import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { AuthS } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  user$;
  email: string;
  constructor(private as: AuthS,
              public auth: AuthService,
              private router: Router) {
    this.user$ = this.auth.user$;
    this.email = this.user$.subscribe(({email}) => this.as.getRole(email));
  }
  // Permite a un usuario entrar a una ruta específica
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (route.data.role !== this.email) {
        this.as.isAuthenticated();
        return false;
      }
      return this.as.isAuthenticated();
  }
  // Permite a un usuario entrar a una ruta específica hija
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.as.isAuthenticated();
  }
  // Determina si un usuario puede salir de una ruta específica. p.e un formulario si no ha guardado los cambios
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  // Resolve: obtiene la data que el componente va a mostrar
}

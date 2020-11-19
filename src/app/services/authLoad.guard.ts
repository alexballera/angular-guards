import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { AuthS } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthLoadGuard implements CanLoad {
  user$;
  email: string;
  constructor(private as: AuthS,
              public auth: AuthService) {
    this.user$ = this.auth.user$;
    this.email = this.user$.subscribe(({email}) => this.as.getRole(email));
  }

  // Permite cargar un módulo de característica asíncrona Lazy Loading
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (route.data.role !== this.email) {
        this.as.isAuthenticated();
        return true;
      }
      return this.as.isAuthenticated();
  }
}

import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthS {
  user: any;

  constructor(public auth: AuthService) {
    this.auth.user$.subscribe(data => this.user = data);
  }

  getRole(): any {
    if (this.user) {
      switch (this.user.email) {
        case 'alexballera@gmail.com':
          return 'admin';
        case 'ajballeralugo@gylgroup.com':
          return 'user';
        default:
          break;
      }
    }
  }
}

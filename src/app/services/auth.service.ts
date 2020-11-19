import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthS {
  email = '';
  isLogged = false;

  constructor(private router: Router,
              public auth: AuthService) {
    this.getUser();
    this.isLoggedIn();
  }

  async getUser(): Promise<void> {
    await this.auth.user$.subscribe(({email}) => this.email = email);
  }

  async isLoggedIn(): Promise<void> {
    await this.auth.isAuthenticated$.subscribe(val => this.isLogged = val);
  }

  isAuthenticated(): boolean {
    if (!this.isLogged) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

  getRole(): string {
    this.getUser();
    switch (this.email) {
      case 'alexballera@gmail.com':
        return 'admin';
      case 'ajballeralugo@gylgroup.com':
        return 'user';
      default:
        return '';
    }
  }
}

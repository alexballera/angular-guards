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
    this.auth.user$.subscribe(data => {
      if (data) {
        this.email = data.email
      }
    });
  }

  async isLoggedIn(): Promise<void> {
    this.auth.isAuthenticated$.subscribe(val => this.isLogged = val);
  }

  isAuthenticated(): boolean {
    if (!this.isLogged) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }

  getRole = (email: string) => {
    if (email) {
      const role = {
        'alexballera@gmail.com': 'admin',
        default: 'user'
      };
      return role[email] || role.default;
    }
  }
}

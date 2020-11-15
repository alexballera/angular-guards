import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  role: string;
  subs$;

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService) {
    this.subs$ = this.auth.user$;
  }

  ngOnInit(): void {
    this.getRole();
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  getRole(): void {
    this.subs$.subscribe((data: any) => {
      switch (data.email) {
        case 'alexballera@gmail.com':
          this.role = 'admin';
          break;
        case 'ajballeralugo@gylgroup.com':
          this.role = 'user';
          break;
        default:
          break;
      }
    });
  }
}

import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { AuthS } from 'src/app/services/auth.service';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  role: string;
  subs$;
  as$;

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService,
              public as: AuthS) {
    this.subs$ = this.auth.user$;
  }

  ngOnInit(): void {
    this.getRole();
    this.as$ = this.as.isAuthenticated();
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

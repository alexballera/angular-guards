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
  user$;
  as$;
  email: string;

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService,
              public as: AuthS
              ) {
              this.user$ = this.auth.user$;
            }

  ngOnInit(): void {
    this.getRole();
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }

  getRole(): void {
    this.user$.subscribe((data: any) => data ? this.role = this.as.getRole(data.email) : null);
  }
}

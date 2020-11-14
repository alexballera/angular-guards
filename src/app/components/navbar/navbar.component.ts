import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  user: any;

  constructor(@Inject(DOCUMENT) public document: Document,
              public auth: AuthService) {
                auth.user$.subscribe(data => this.user = data);
                console.log(this.user);
              }
}

import { AuthService } from '@auth0/auth0-angular';
import { AuthS } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {
  user: any;
  role: string;

  constructor(public auth: AuthService,
              public as: AuthS) {
    this.auth.user$.subscribe(data => this.user = data);
  }

  ngOnInit(): void {
    this.role = this.as.getRole();
  }
}

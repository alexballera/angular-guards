import { AuthService } from '@auth0/auth0-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent {

  constructor(public auth: AuthService) {}
}

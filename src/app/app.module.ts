import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { RegistroComponent } from './components/registro/registro.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PerfilesComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-njhoyg45.auth0.com',
      clientId: '20ZRYzr8RXIyHyDmNzGWS96pXq3E4Tju'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

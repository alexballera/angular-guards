import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { DemoPipesModule } from 'demo-pipes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PerfilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoPipesModule,
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

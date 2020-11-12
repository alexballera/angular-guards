import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilesComponent } from './pages/perfiles/perfiles.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: `home`, loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `registro`, loadChildren: () =>
      import('./pages/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: `perfiles`,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/perfiles/perfiles.module').then(m => m.PerfilesModule)
  },
  // {path: 'perfiles', component: PerfilesComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

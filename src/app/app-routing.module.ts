import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `registro`,
    loadChildren: () =>
      import('./pages/registro/registro.module').then(m => m.RegistroModule)
  },
  {
    path: `perfiles`,
    loadChildren: () =>
      import('./pages/perfiles/perfiles.module').then(m => m.PerfilesModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

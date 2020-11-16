import { AuthGuard } from './../../services/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilesComponent } from './perfiles.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    data: { role: 'admin' }, // checarlo, compararlo con servidor y dar autorizaciones
    children: [
      {
        path: '',
        component: PerfilesComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilesRoutingModule { }

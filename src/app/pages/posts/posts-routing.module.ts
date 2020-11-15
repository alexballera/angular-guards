import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';
import { PostsComponent } from './posts.component';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard],
    // data: { role: 'user' }, // checarlo, compararlo con servidor y dar autorizaciones
    children: [
      {
        path: '',
        component: PostsComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

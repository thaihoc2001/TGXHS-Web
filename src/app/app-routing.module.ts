import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./share/ui/page-not-found/page-not-found.component";
import {AuthGuard} from "./share/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
    data: {breadcrumb:  'Home'},
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

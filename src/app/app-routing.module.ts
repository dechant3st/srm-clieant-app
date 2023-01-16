import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent, LoginLayoutComponent } from './shared/ui';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/feature/login.module').then((m) => m.LoginPageModule),
  },
  { path: '', component: DefaultLayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

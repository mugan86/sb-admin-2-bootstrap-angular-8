import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./@pages/login-screens/login/login.module').then(m => m.LoginModule)},
  { path: 'register', loadChildren: () => import('./@pages/login-screens/register/register.module').then(m => m.RegisterModule)},
  { path: 'forgot', loadChildren: () => import('./@pages/login-screens/forgot/forgot.module').then(m => m.ForgotModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

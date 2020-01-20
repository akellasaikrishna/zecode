import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { AddLoginComponent } from './add-login/add-login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginScreenComponent
  },
  {
    path: 'add-user',
    component: AddLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

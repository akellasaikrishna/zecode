import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestScreenComponent } from './test-screen/test-screen.component';
import { CandidateTestLoginComponent } from './candidate-test-login/candidate-test-login.component';

const routes: Routes = [
  {
    path: '',
    component: TestScreenComponent
  },
  {
    path: 'candidate-test-login',
    component: CandidateTestLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }

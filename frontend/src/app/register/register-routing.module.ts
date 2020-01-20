import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterationScreenComponent } from "./registeration-screen/registeration-screen.component";

const routes: Routes = [
  {
    path: "",
    component: RegisterationScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}

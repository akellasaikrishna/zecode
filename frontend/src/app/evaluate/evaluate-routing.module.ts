import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EvaluationScreenComponent } from "./evaluation-screen/evaluation-screen.component";

const routes: Routes = [
  {
    path: "",
    component: EvaluationScreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluateRoutingModule {}

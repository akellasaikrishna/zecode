import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddNewTestComponent } from "./add-new-test/add-new-test.component";
import { EditQuestionBankComponent } from "./edit-question-bank/edit-question-bank.component";

const routes: Routes = [
  {
    path: "addNewTest",
    component: AddNewTestComponent
  },
  {
    path: "questionBank",
    component: EditQuestionBankComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestUtilsRoutingModule {}

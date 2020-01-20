import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthguardService } from "./utils/authguard.service";
import { HeaderComponent } from "./utils/header/header.component";
import { TestCompletedComponent } from "./utils/test-completed/test-completed.component";
import { ForbiddenComponent } from "./utils/forbidden/forbidden.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "login",
    loadChildren: "src/app/login/login.module#LoginModule"
  },
  {
    path: "home",
    loadChildren: "src/app/register/register.module#RegisterModule",
    canActivate: [AuthguardService]
  },
  {
    path: "evaluate",
    loadChildren: "src/app/evaluate/evaluate.module#EvaluateModule",
    canActivate: [AuthguardService]
  },
  {
    path: "test",
    loadChildren: "src/app/test/test.module#TestModule"
  },
  {
    path: "testUtils",
    loadChildren: "src/app/test-utils/test-utils.module#TestUtilsModule",
    canActivate: [AuthguardService]
  },
  {
    path: "403-forbidden",
    component: ForbiddenComponent
  },
  {
    path: "test-completed",
    component: TestCompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

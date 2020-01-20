import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestRoutingModule } from "./test-routing.module";
import { TestScreenComponent } from "./test-screen/test-screen.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { UtilsModule } from "../utils/utils.module";
import { UsersListService } from "../services/users-list.service";
import { RegisterServiceService } from "../services/register-service.service";
import { CandidateTestLoginComponent } from "./candidate-test-login/candidate-test-login.component";
import { TestsService } from "../services/tests.service";
import { DialogBoxComponent } from "../utils/dialog-box/dialog-box.component";
import { DialogComponent } from "../utils/dialog/dialog.component";
import { TestNotCompletedDialogComponent } from "../utils/test-not-completed-dialog/test-not-completed-dialog.component";
import { SubmitCreditsDialogComponent } from "../utils/submit-credits-dialog/submit-credits-dialog.component";

@NgModule({
  declarations: [TestScreenComponent, CandidateTestLoginComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    UtilsModule
  ],
  providers: [UsersListService, RegisterServiceService, TestsService],
  entryComponents: [
    DialogBoxComponent,
    TestNotCompletedDialogComponent,
    SubmitCreditsDialogComponent
  ]
})
export class TestModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TestUtilsRoutingModule } from "./test-utils-routing.module";
import { AddNewTestComponent } from "./add-new-test/add-new-test.component";
import { UtilsModule } from "../utils/utils.module";
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
import { TestsService } from "../services/tests.service";
import { EditQuestionBankComponent } from "./edit-question-bank/edit-question-bank.component";
import { RegisterServiceService } from "../services/register-service.service";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [AddNewTestComponent, EditQuestionBankComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    CommonModule,
    UtilsModule,
    TestUtilsRoutingModule
  ],
  providers: [TestsService, RegisterServiceService]
})
export class TestUtilsModule {}

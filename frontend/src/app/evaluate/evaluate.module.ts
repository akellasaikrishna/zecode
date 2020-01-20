import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EvaluateRoutingModule } from "./evaluate-routing.module";
import { EvaluationScreenComponent } from "./evaluation-screen/evaluation-screen.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { UsersListService } from "../services/users-list.service";
import { UtilsModule } from "../utils/utils.module";
import { RegisterServiceService } from "../services/register-service.service";
import { MatIconModule } from "@angular/material/icon";
import { SnackbarComponent } from "../utils/snackbar/snackbar.component";
import { DialogBoxComponent } from "../utils/dialog-box/dialog-box.component";
import { DialogComponent } from "../utils/dialog/dialog.component";
import { TestsService } from "../services/tests.service";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatChipsModule } from "@angular/material/chips";

@NgModule({
  declarations: [EvaluationScreenComponent],
  imports: [
    CommonModule,
    MatIconModule,
    EvaluateRoutingModule,
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
    CommonModule,
    UtilsModule,
    MatTableModule,
    MatPaginatorModule,
    MatChipsModule
  ],
  providers: [UsersListService, RegisterServiceService, TestsService],
  entryComponents: [SnackbarComponent, DialogBoxComponent, DialogComponent]
})
export class EvaluateModule {}

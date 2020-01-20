import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterationScreenComponent } from "./registeration-screen/registeration-screen.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { RegisterServiceService } from "../services/register-service.service";
import { SnackbarComponent } from "../utils/snackbar/snackbar.component";
import { DialogBoxComponent } from "../utils/dialog-box/dialog-box.component";
import { DialogComponent } from "../utils/dialog/dialog.component";
import { UtilsModule } from "../utils/utils.module";
import { QuestionBankComponent } from "../utils/question-bank/question-bank.component";
import { TestsService } from "../services/tests.service";
import { DataSharingService } from "../services/data-sharing.service";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [RegisterationScreenComponent],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatChipsModule,
    CommonModule,
    RegisterRoutingModule,
    UtilsModule,
    MatTooltipModule
  ],
  providers: [
    MatDatepickerModule,
    RegisterServiceService,
    SnackbarComponent,
    DialogBoxComponent,
    TestsService,
    DataSharingService
  ],
  entryComponents: [
    SnackbarComponent,
    DialogBoxComponent,
    DialogComponent,
    QuestionBankComponent
  ]
})
export class RegisterModule {}

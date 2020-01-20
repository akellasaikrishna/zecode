import { NgModule } from "@angular/core";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
import { DialogComponent } from "./dialog/dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { TestValueDirective } from "./test-value.directive";
import { MatTabsModule } from "@angular/material/tabs";
import { HeaderComponent } from "./header/header.component";
import { MatIconModule } from "@angular/material/icon";
import { TestNotCompletedDialogComponent } from "./test-not-completed-dialog/test-not-completed-dialog.component";
import { SubmitCreditsDialogComponent } from "./submit-credits-dialog/submit-credits-dialog.component";
import { ReactiveFormsModule } from "@angular/forms";
import { QuestionBankComponent } from "./question-bank/question-bank.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { DataSharingService } from '../services/data-sharing.service';

@NgModule({
  declarations: [
    SnackbarComponent,
    DialogBoxComponent,
    DialogComponent,
    TestValueDirective,
    HeaderComponent,
    TestNotCompletedDialogComponent,
    SubmitCreditsDialogComponent,
    QuestionBankComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [SnackbarComponent, DialogBoxComponent, DataSharingService],
  exports: [
    TestNotCompletedDialogComponent,
    QuestionBankComponent,
    SnackbarComponent,
    DialogBoxComponent,
    DialogComponent,
    TestValueDirective,
    MatTabsModule,
    HeaderComponent
  ]
})
export class UtilsModule {}

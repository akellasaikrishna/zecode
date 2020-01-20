import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";
import { TestNotCompletedDialogComponent } from "../test-not-completed-dialog/test-not-completed-dialog.component";
import { SubmitCreditsDialogComponent } from "../submit-credits-dialog/submit-credits-dialog.component";
import { QuestionBankComponent } from "../question-bank/question-bank.component";

@Component({
  selector: "app-dialog-box",
  templateUrl: "./dialog-box.component.html",
  styleUrls: ["./dialog-box.component.css"]
})
export class DialogBoxComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  open(link, screen): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "100vh",
      data: { link: link, screen: screen }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  openQuestionsSelectionWindow(data): void {
    const dialogRef = this.dialog.open(QuestionBankComponent, {
      width: "150vh",
      data: { questions: data }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  openCreditsScreen(id): void {
    const dialogRef = this.dialog.open(SubmitCreditsDialogComponent, {
      width: "50vh",
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe(result => {});
  }

  notCompletedDialog(): void {
    const dialogRef = this.dialog.open(TestNotCompletedDialogComponent, {
      width: "100vh",
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}

import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: "app-test-not-completed-dialog",
  templateUrl: "./test-not-completed-dialog.component.html",
  styleUrls: ["./test-not-completed-dialog.component.css"]
})
export class TestNotCompletedDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<TestNotCompletedDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {}

  goBack() {
    this.router.navigate(["/evaluate"]);
    this.dialogRef.close();
  }
}

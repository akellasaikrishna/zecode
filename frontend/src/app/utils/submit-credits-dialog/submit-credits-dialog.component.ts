import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { TestsService } from "src/app/services/tests.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SnackbarComponent } from "../snackbar/snackbar.component";

@Component({
  selector: "app-submit-credits-dialog",
  templateUrl: "./submit-credits-dialog.component.html",
  styleUrls: ["./submit-credits-dialog.component.css"]
})
export class SubmitCreditsDialogComponent implements OnInit {
  id: string;
  creditsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SubmitCreditsDialogComponent>,
    private testsService: TestsService,
    private router: Router,
    private snackbarComponent: SnackbarComponent,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.id = data["id"];
    this.creditsForm = this.fb.group({
      testCredits: [null, Validators.required],
      testComments: ["", Validators.required]
    });
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitCredits() {
    const formData = { ...this.creditsForm.value };
    formData["id"] = this.id;
    formData["credits"] = Number(formData["credits"]);
    this.testsService.saveTestCredits(formData).subscribe(res => {
      if (res["status"] == "success") {
        this.dialogRef.close();
        this.snackbarComponent.open(res["message"], "", 3);
        setTimeout(() => {
          this.router.navigate(["/evaluate"], { skipLocationChange: true });
        }, 600);
      }
    });
  }
}

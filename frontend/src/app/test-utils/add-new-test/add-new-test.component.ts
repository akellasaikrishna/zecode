import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { TestsService } from "src/app/services/tests.service";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";
import { DialogBoxComponent } from "src/app/utils/dialog-box/dialog-box.component";

@Component({
  selector: "app-add-new-test",
  templateUrl: "./add-new-test.component.html",
  styleUrls: ["./add-new-test.component.css"]
})
export class AddNewTestComponent implements OnInit {
  newTestForm: FormGroup;
  newJobForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private testsService: TestsService,
    private snackbarComponent: SnackbarComponent,
    private dialogBox: DialogBoxComponent
  ) {}

  ngOnInit() {
    this.newTestForm = this.fb.group({
      testName: ["", Validators.required],
      testValue: ["", Validators.required]
    });
    this.newJobForm = this.fb.group({
      jobRoleID: ["", Validators.required],
      jobRoleTitle: ["", Validators.required]
    });
  }

  addTest() {
    const formData = { ...this.newTestForm.value };
    formData["testValue"] = Number(formData["testValue"]);
    this.testsService.addTest(formData).subscribe(
      res => {
        this.newTestForm.reset();
        this.snackbarComponent.open(res["message"], "", 3);
      },
      err => {
        this.snackbarComponent.open("Something Went Wrong", "", 3);
      }
    );
  }

  addJobRole() {
    const formData = { ...this.newJobForm.value };
    formData["jobRoleID"] = Number(formData["jobRoleID"]);
    this.testsService.addNewJobRoles(formData).subscribe(
      res => {
        this.newJobForm.reset();
        this.snackbarComponent.open(res["message"], "", 3);
      },
      err => {
        this.snackbarComponent.open("Something Went Wrong", "", 3);
      }
    );
  }
}

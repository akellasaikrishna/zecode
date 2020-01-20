import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { RegisterServiceService } from "src/app/services/register-service.service";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";
import { DialogBoxComponent } from "src/app/utils/dialog-box/dialog-box.component";
import { TestsService } from "src/app/services/tests.service";
import { DataSharingService } from "src/app/services/data-sharing.service";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-registeration-screen",
  templateUrl: "./registeration-screen.component.html",
  styleUrls: ["./registeration-screen.component.css"]
})
export class RegisterationScreenComponent implements OnInit {
  registerForm: FormGroup;
  tests: any;
  searchResult: any;
  minDate: Date = new Date();
  questionsTooltip: String;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private registerServiceService: RegisterServiceService,
    private snackbarComponent: SnackbarComponent,
    private dialogBox: DialogBoxComponent,
    private testsService: TestsService,
    private dataSharingService: DataSharingService
  ) {}

  ngOnInit() {
    this.registerServiceService.getTestData().subscribe(
      res => {
        this.tests = [...res["data"]["utilTestList"]];
      },
      err => {}
    );

    this.formBuilder({
      name: "",
      email: "",
      test: null,
      questions: []
    });

    this.dataSharingService.data.subscribe(res => {
      this.registerForm.controls["questions"].setValue(res);
      if (this.registerForm.controls["questions"].value.length > 0) {
        this.registerForm.controls["questions"].value.map(item => {
          this.questionsTooltip = item["question"];
        });
      }
    });
    this.registerForm.controls["email"].valueChanges
      .pipe(debounceTime(1000))
      .subscribe(res => {
        this.registerServiceService
          .getByMailID({ email: res })
          .subscribe(result => {
            this.searchResult = result["data"]["userInfo"];
          });
      });
  }

  formBuilder(data) {
    this.registerForm = this.fb.group({
      name: ["" || data.name, Validators.required],
      email: ["" || data.email, Validators.required],
      testDuration: [null || data.testDuration, Validators.required],
      test: [[] || data.test],
      questions: [[] || data.questions, Validators.required]
    });
  }

  buildForm() {
    this.formBuilder(this.searchResult);
  }

  submit() {
    let formData = { ...this.registerForm.value };
    formData["date"] = new Date();
    if (this.registerForm.valid) {
      this.registerServiceService.register(formData).subscribe(
        res => {
          this.registerForm.reset();
          this.snackbarComponent.open(res["message"], "", 3);
          this.dialogBox.open(res["data"]["content"]["link"], "new");
        },
        err => {
          this.snackbarComponent.open("Something Went Wrong", "", 3);
        }
      );
    }
  }

  openQuestionsPopup() {
    this.testsService.getQuestionsArray({}).subscribe(res => {
      this.dialogBox.openQuestionsSelectionWindow(res["data"]["responseArray"]);
    });
  }
}

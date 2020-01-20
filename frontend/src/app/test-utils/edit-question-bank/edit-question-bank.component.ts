import { Component, OnInit } from "@angular/core";
import { RegisterServiceService } from "src/app/services/register-service.service";
import { TestsService } from "src/app/services/tests.service";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";

@Component({
  selector: "app-edit-test-questions",
  templateUrl: "./edit-question-bank.component.html",
  styleUrls: ["./edit-question-bank.component.css"]
})
export class EditQuestionBankComponent implements OnInit {
  domains: any;
  jobRoles = [];
  selectedJobRoleID: any;
  questions = [];
  questionsInput: any;
  defaultProjectSetup: any;
  testID: string;
  allProjectSetups = [];
  isRoleSelected: boolean;
  isQuestionArrayAvailable: boolean;

  constructor(
    private registerServiceService: RegisterServiceService,
    private testsService: TestsService,
    private snackbarComponent: SnackbarComponent
  ) {}

  ngOnInit() {
    this.registerServiceService.getTestData().subscribe(
      res => {
        this.domains = [...res["data"]["utilTestList"]];
      },
      err => {}
    );
    this.testsService.getAllProjectSetups({}).subscribe(res => {
      this.allProjectSetups = [...res["data"]["projects"]];
    });

    this.testsService.getAllJobRoles({}).subscribe(res => {
      this.jobRoles = [...res["data"]["result"]];
    });
  }

  onjobRoleValueChange() {
    this.isRoleSelected = true;
    this.questions = [];
    this.testsService
      .getTestLinksByID({ jobRoleID: this.selectedJobRoleID })
      .subscribe(res => {
        if (res["data"]["testData"].length > 0) {
          this.isQuestionArrayAvailable = true;
          this.questions = [...res["data"]["testData"][0]["questionsArray"]];
          console.log(this.questions);
        } else {
          this.isQuestionArrayAvailable = false;
        }
      });
  }

  addMore() {
    this.questions.push({ question: "", projectSetup: {} });
  }

  removeItem(index) {
    this.questions.splice(index, 1);
  }

  inputChange(index, value) {
    this.questions[index]["question"] = value;
  }

  onDomainChange(index, val) {
    this.allProjectSetups.forEach(item => {
      if (item["domainID"] == val) {
        this.questions[index]["domainId"] = val;
        this.questions[index]["projectSetup"] = item["setup"];
      }
    });
  }

  submit() {
    const formData = {};
    formData["jobRoleID"] = this.selectedJobRoleID;
    formData["questionsArray"] = this.questions;
    if (!this.isQuestionArrayAvailable) {
      this.testsService.addQuestions(formData).subscribe(res => {
        this.snackbarComponent.open(res["message"], "", 3);
      });
    } else {
      this.testsService.editQuestionsByID(formData).subscribe(res => {
        this.snackbarComponent.open(res["message"], "", 3);
      });
    }
  }
}

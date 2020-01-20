import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { UsersListService } from "src/app/services/users-list.service";
import { DialogBoxComponent } from "src/app/utils/dialog-box/dialog-box.component";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";
import { RegisterServiceService } from "src/app/services/register-service.service";
import { TestsService } from "src/app/services/tests.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

export interface UserData {
  index: number;
  name: String;
  email: String;
  date: String;
  test: any;
  creditsEarned: number;
}

@Component({
  selector: "app-evaluation-screen",
  templateUrl: "./evaluation-screen.component.html",
  styleUrls: ["./evaluation-screen.component.css"]
})
export class EvaluationScreenComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "email",
    "date",
    "creditsEarned",
    "testStatus",
    "actions"
  ];
  dataSource: MatTableDataSource<UserData>;
  tests: any;
  testTitles: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private router: Router,
    private usersListService: UsersListService,
    private snackbarComponent: SnackbarComponent,
    private dialogBox: DialogBoxComponent,
    private registerServiceService: RegisterServiceService,
    private testsService: TestsService
  ) {
    this.registerServiceService.getTestData().subscribe(res => {
      this.testTitles = res["data"]["utilTestList"];
    });
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.usersListService.getAllUsers().subscribe(
      res => {
        this.tests = [...res["data"]["users"]];
        this.tests.map(item => {
          this.testsService
            .fetchUserCreditsById({ id: item.id })
            .subscribe(res => {
              if (res["data"]["result"].length == 0) {
                item["creditsEarned"] = "-";
              } else {
                item["creditsEarned"] = res["data"]["result"][0]["testCredits"];
              }
            });
          this.testsService
            .fetchResponsesById({ id: item.id })
            .subscribe(res => {
              if (res["data"]["responseData"].length == 0) {
                item["testStatus"] = true;
              } else {
                item["testStatus"] = false;
              }
            });
        });
        this.dataSource = new MatTableDataSource(this.tests);
      },
      err => {
        console.log(err["message"]);
      }
    );
  }

  openEvaluationScreen(id) {
    this.router.navigate(["/test"], {
      skipLocationChange: true,
      queryParams: { id: id }
    });
  }

  deleteTest(id) {
    this.usersListService.deleteUserByID({ id: id }).subscribe(res => {
      if (res["status"] == "success") {
        this.snackbarComponent.open(res["message"], "", 3);
        this.ngOnInit();
      }
    });
  }

  viewTestLink(id) {
    this.dialogBox.open(
      `https://zecode.zessta.com/test?mode=candidate&id=${id}`,
      "evaluation"
    );
  }
}

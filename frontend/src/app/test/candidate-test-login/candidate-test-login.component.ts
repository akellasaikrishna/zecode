import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UsersListService } from "src/app/services/users-list.service";

@Component({
  selector: "app-candidate-test-login",
  templateUrl: "./candidate-test-login.component.html",
  styleUrls: ["./candidate-test-login.component.css"]
})
export class CandidateTestLoginComponent implements OnInit {
  candidateForm: FormGroup;
  candidateDetails: any;
  ID: string;
  mode: string;
  token: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usersListService: UsersListService
  ) {
    this.route.queryParams.subscribe(res => {
      this.ID = res["id"];
      this.mode = res["mode"];
      this.token = res["token"];
      this.usersListService.getUserByID({ id: this.ID }).subscribe(res => {
        this.candidateDetails = { ...res["data"]["user"] };
        this.candidateForm.controls["name"].setValue(
          this.candidateDetails["name"]
        );
      });
    });
  }

  ngOnInit() {
    this.candidateForm = this.fb.group({
      name: ["", Validators.required]
    });
  }
  startTest() {
    const name = this.candidateForm.controls["name"].value;
    this.usersListService
      .editUserByID({ id: this.ID, name: name })
      .subscribe(res => {
        if (res["status"] == "success") {
          this.router.navigate(["/test"], {
            queryParams: {
              testStatus: "started",
              token: this.token,
              mode: this.mode,
              id: this.ID
            }
          });
        }
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";

@Component({
  selector: "app-add-login",
  templateUrl: "./add-login.component.html",
  styleUrls: ["./add-login.component.css"]
})
export class AddLoginComponent implements OnInit {
  newUserForm: FormGroup;
  emailErr: boolean;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackbarComponent: SnackbarComponent
  ) {}

  ngOnInit() {
    this.newUserForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.newUserForm.controls["email"].valueChanges.subscribe(res => {
      this.emailErr = res.search("@") == -1 ? false : true;
    });
  }

  addUser() {
    const formData = { ...this.newUserForm.value };
    formData["email"] = `${formData["email"]}@zessta.com`;
    this.loginService.createUser(formData).subscribe(
      res => {
        this.snackbarComponent.open(res["message"], "", 3);
        setTimeout(() => {
          this.router.navigate(["/login"], { skipLocationChange: true });
        }, 500);
      },
      err => {
        this.snackbarComponent.open(err["message"], "", 3);
      }
    );
  }

  login() {
    this.router.navigate(["/login"], { skipLocationChange: true });
  }
}

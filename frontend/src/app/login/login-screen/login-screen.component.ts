import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { SnackbarComponent } from "src/app/utils/snackbar/snackbar.component";
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: "app-login-screen",
  templateUrl: "./login-screen.component.html",
  styleUrls: ["./login-screen.component.css"]
})
export class LoginScreenComponent implements OnInit {
  loginForm: FormGroup;
  private user: SocialUser;
  constructor(
    private snackbarComponent: SnackbarComponent,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    const formData = { ...this.loginForm.value };
    this.loginService.login(formData).subscribe(
      res => {
        switch (res["status"]) {
          case "success":
            if (res["data"]["token"]) {
              localStorage.setItem("token", res["data"]["token"]);
              this.router.navigate(["/home"], { skipLocationChange: true });
            }
            break;
          case "error":
            this.snackbarComponent.open(res["message"], "", 3);
            break;
        }
      },
      err => {
        this.snackbarComponent.open(err["message"], "", 3);
      }
    );
  }

  googleLogin(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      this.user = { ...res };
      if (this.user["authToken"]) {
        if (this.user["email"].search("@zessta.com") != -1) {
          localStorage.setItem("token", this.user["authToken"]);
          this.router.navigate(["/home"], { skipLocationChange: true });
        } else {
          this.snackbarComponent.open(
            "Please use your zessta google account to login",
            "",
            3
          );
        }
      }
    });
  }

  addUser() {
    this.router.navigate(["/login/add-user"], { skipLocationChange: true });
  }
}

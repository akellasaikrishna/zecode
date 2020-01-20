import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RegisterRoutingModule } from "../register/register-routing.module";
import { UtilsModule } from "../utils/utils.module";
import { LoginService } from "../services/login.service";
import { AddLoginComponent } from "./add-login/add-login.component";
import { MatIconModule } from "@angular/material/icon";
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "548879809652-271rn6q7hontepnkb1bgq7fmo604lvbs.apps.googleusercontent.com"
    )
  }
]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [LoginScreenComponent, AddLoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSnackBarModule,
    UtilsModule,
    SocialLoginModule
  ],
  providers: [
    LoginService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class LoginModule {}

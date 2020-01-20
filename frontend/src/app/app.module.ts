import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AuthguardService } from "./utils/authguard.service";
import { LoginService } from "./services/login.service";
import { RegisterServiceService } from "./services/register-service.service";
import { EnvServiceProvider } from "../env.service.provider";
import { TestCompletedComponent } from "./utils/test-completed/test-completed.component";
import { ForbiddenComponent } from "./utils/forbidden/forbidden.component";

@NgModule({
  declarations: [AppComponent, TestCompletedComponent, ForbiddenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [
    AuthguardService,
    LoginService,
    RegisterServiceService,
    EnvServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

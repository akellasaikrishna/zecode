import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of as observableOf } from "rxjs";
import { EnvService } from 'src/env.service';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient, private env: EnvService) {}

  createUser(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/login/create`, data);
  }

  login(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/login/authenticate`, data);
  }

  isAuthenticated(): Observable<boolean> {
    if (localStorage.getItem("token")) {
      return observableOf(true);
    } else {
      return observableOf(false);
    }
  }
}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvService } from "src/env.service";

@Injectable({
  providedIn: "root"
})
export class RegisterServiceService {
  constructor(private http: HttpClient, private env: EnvService) {}

  register(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/users/generate`, data);
  }

  getTestData(): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/utils/getAllUtilTests`);
  }

  getByMailID(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/users/getByMailID`, data);
  }
}

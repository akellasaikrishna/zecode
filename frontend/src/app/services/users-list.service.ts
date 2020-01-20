import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvService } from "src/env.service";

@Injectable({
  providedIn: "root"
})
export class UsersListService {
  constructor(private http: HttpClient, private env: EnvService) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.env.apiUrl}/users/getAllUsers`);
  }

  getUserByID(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/users/getUserById`, data);
  }

  getUtilTestByValue(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/utils/getUtilTestByValue`, data);
  }
  editUserByID(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/users/editUserById`, data);
  }
  deleteUserByID(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/users/deleteById`, data);
  }
}

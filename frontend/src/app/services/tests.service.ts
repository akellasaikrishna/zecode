import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvService } from "src/env.service";

@Injectable({
  providedIn: "root"
})
export class TestsService {
  constructor(private http: HttpClient, private env: EnvService) {}

  getTestLinksByID(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/test/getTestLinksByID`, data);
  }

  addTest(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/utils/addUtilTest`, data);
  }

  editQuestionsByID(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/test/editQuestionsByID`, data);
  }

  getQuestionsArray(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/test/getQuestionsArray`, data);
  }

  addQuestions(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/test/addTestLinks`, data);
  }

  saveTestResponse(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/response/saveTestResponse`, data);
  }

  fetchResponsesById(data): Observable<any> {
    return this.http.post(
      `${this.env.apiUrl}/response/fetchResponsesById`,
      data
    );
  }

  saveTestCredits(data): Observable<any> {
    return this.http.post(
      `${this.env.apiUrl}/testCredits/saveTestCredits`,
      data
    );
  }

  fetchUserCreditsById(data): Observable<any> {
    return this.http.post(
      `${this.env.apiUrl}/testCredits/fetchUserCreditsById`,
      data
    );
  }

  getAllProjectSetups(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/projectSetup/getAll`, data);
  }

  getAllJobRoles(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/jobRoles/getAllJobRoles`, data);
  }

  // TEST UTILS DATA PROVIDERS

  addNewJobRoles(data): Observable<any> {
    return this.http.post(`${this.env.apiUrl}/jobRoles/addNewJobRole`, data);
  }

  // TEST UTILS DATA PROVIDERS
}

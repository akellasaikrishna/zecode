import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataSharingService {
  private source = new BehaviorSubject([]);
  data = this.source.asObservable();

  constructor() {}

  sendData(data: any) {
    this.source.next(data);
  }
}

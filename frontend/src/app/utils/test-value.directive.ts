import {
  Directive,
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked
} from "@angular/core";
import { UsersListService } from "../services/users-list.service";
import { RegisterServiceService } from "../services/register-service.service";

@Directive({
  selector: "[appTestTitle]"
})
export class TestValueDirective implements AfterViewChecked {
  testTitles = [];
  constructor(
    private el: ElementRef,
    private registerServiceService: RegisterServiceService
  ) {
    this.registerServiceService.getTestData().subscribe(res => {
      this.testTitles = [...res["data"]["utilTestList"]];
    });
  }

  ngAfterViewChecked() {
    const value = this.el.nativeElement["innerText"];
    const arr = value.split(",").map(item => Number(item));
    for (let testValue of arr) {
      this.testTitles.map(item => {
        if (item["testValue"] == testValue) {
          this.el.nativeElement["innerText"] = item["testName"];
        }
      });
    }
  }
}

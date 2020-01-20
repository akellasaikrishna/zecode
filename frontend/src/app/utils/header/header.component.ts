import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}

  create() {
    this.router.navigate(["/home"], { skipLocationChange: true });
  }

  addNewTests() {
    this.router.navigate(["testUtils/addNewTest"], {
      skipLocationChange: true
    });
  }

  questionBank() {
    this.router.navigate(["testUtils/questionBank"], {
      skipLocationChange: true
    });
  }

  evaluate() {
    this.router.navigate(["/evaluate"], { skipLocationChange: true });
  }

  isLoggedin() {
    return localStorage.getItem("token") ? true : false;
  }

  logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/login"], { skipLocationChange: true });
  }
}

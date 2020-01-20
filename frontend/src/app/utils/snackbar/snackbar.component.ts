import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-snackbar",
  templateUrl: "./snackbar.component.html",
  styleUrls: ["./snackbar.component.css"]
})
export class SnackbarComponent implements OnInit {
  constructor(private snack: MatSnackBar) {}

  ngOnInit() {}

  open(message, action, duration) {
    this.snack.open(message, action, {
      duration: 1000 * duration,
    });
  }
}

import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  link: string;
  screen: string;
  dialogBoxTitle: string = "demo";
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.link = data["link"];
    this.screen = data["screen"];
  }

  ngOnInit() {
    switch (this.screen) {
      case "new":
        this.dialogBoxTitle = "Link Generated successfully !";
        break;
      case "evaluation":
        this.dialogBoxTitle = "Test Link";
        break;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  copyLink(element) {
    element.focus();
    element.select();
    document.execCommand("copy");
    element.setSelectionRange(0, 0);
  }
}

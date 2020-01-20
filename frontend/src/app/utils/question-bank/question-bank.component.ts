import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RegisterServiceService } from "src/app/services/register-service.service";
import { SnackbarComponent } from "../snackbar/snackbar.component";
import { SelectionModel } from "@angular/cdk/collections";
import { DataSharingService } from "src/app/services/data-sharing.service";

export interface QuestionsData {
  index: number;
  question: String;
  domain: String;
}

@Component({
  selector: "app-question-bank",
  templateUrl: "./question-bank.component.html",
  styleUrls: ["./question-bank.component.css"]
})
export class QuestionBankComponent implements OnInit {
  displayedColumns: string[] = ["select", "question", "domain"];
  dataSource: MatTableDataSource<QuestionsData>;
  selection = new SelectionModel<QuestionsData>(true, []);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dataSharingService: DataSharingService,
    public dialogRef: MatDialogRef<QuestionBankComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    const questions = [...data["questions"]];
    this.dataSource = new MatTableDataSource(questions);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: QuestionsData): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${
      this.selection.isSelected(row) ? "deselect" : "select"
    } row ${row.index + 1}`;
  }

  closeDialog() {
    this.dialogRef.afterClosed().subscribe(result => {
      this.dataSharingService.sendData(result["_selected"]);
    });
  }
}

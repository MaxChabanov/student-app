import { Component, OnInit } from '@angular/core';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBarPrimary() {
    this._snackBar.open('Test message primary', 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['primary-snackbar'],
    });
  }
  openSnackBarWarn() {
    this._snackBar.open('Test message warn', 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['warn-snackbar'],
    });
  }
  openSnackBarError() {
    this._snackBar.open('Test message error', 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar'],
    });
  }
  openSnackBarSuccess() {
    this._snackBar.open('Test message success', 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      panelClass: ['success-snackbar'],
    });
  }
}

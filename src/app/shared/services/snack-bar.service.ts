import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
  MatSnackBarHorizontalPosition,
  MatSnackBarConfig
} from '@angular/material';
// import { ISnackBarData } from '../interfaces/snack-bar.interface';

@Injectable()
export class SnackBarService {
  private snackBarConfig = new MatSnackBarConfig();
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private snackBarAutoHide = 5000;

  constructor(private _matSnackBar: MatSnackBar) {}

  open(data) {
    this.snackBarConfig.horizontalPosition = data.horizontalPosition || this.horizontalPosition;
    this.snackBarConfig.verticalPosition = data.verticalPosition || this.verticalPosition;
    this.snackBarConfig.duration = data.duration || this.snackBarAutoHide;
    this.snackBarConfig.panelClass = data.type;

    return this._matSnackBar.open(data.message, data.action, this.snackBarConfig);
  }
}

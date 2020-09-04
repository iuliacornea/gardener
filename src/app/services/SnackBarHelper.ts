import {MatSnackBarConfig} from '@angular/material/snack-bar';
import {Injectable} from '@angular/core';

export class SnackBarHelper {

  static error: MatSnackBarConfig = {
    duration: 1800,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: 'snack-error'
  };

  static success: MatSnackBarConfig = {
    duration: 1800,
    horizontalPosition: 'center',
    verticalPosition: 'top',
    panelClass: 'snack-success'
  };
}

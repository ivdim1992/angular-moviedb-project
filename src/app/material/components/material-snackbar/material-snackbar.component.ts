import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'moviedb-snack-bar',
    templateUrl: './material-snackbar.component.html',
    styleUrls: ['./material-snackbar.component.scss']
})
export class MaterialSnackbar {
    constructor(private _snackBar: MatSnackBar) { }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top',
            panelClass: ['snackBar']
        });
    }
}
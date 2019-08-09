import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';

const modules = [
  MatInputModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatCheckboxModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        verticalPosition: 'top',
        panelClass: ['epu-snackbar']
      }
    }
  ]
})
export class MaterialSharedModule {}

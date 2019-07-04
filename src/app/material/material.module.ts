import { NgModule } from '@angular/core';
import {  MatIconModule, MatCardModule,
  MatFormFieldModule, MatInputModule,
  MatDialogModule, MatButtonModule,
  MatSnackBarModule, MatCheckboxModule, MatSelectModule, MatToolbarModule, MatDialog, MatDialogConfig, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  disableClose: true,
  hasBackdrop: true
}

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG}
  ]

})
export class MaterialModule { }

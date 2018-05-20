import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  // DateAdapter,
  // MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatIconRegistry,
  MatTableModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatError,
  MatChipInput,
  MatChipRemove,
  MatTabsModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatDialogModule,
    RouterModule,
    MatTabsModule,
  ],
  providers: [
    MatIconRegistry,
    MatError,
    MatChipInput,
    MatChipRemove],

  declarations: [
  ],

  exports: [CommonModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    RouterModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDialogModule,
    MatSlideToggleModule]
})
export class ApplicationModule { }

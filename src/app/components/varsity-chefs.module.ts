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
  MatExpansionModule,
  MatExpansionPanel,
  MatStepperModule,
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeManagementComponent } from './recipe-management/recipe-management.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ApplicationComponent } from './application-management/application/application.component';
import { ApplicationService } from '../services/application.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/Auth.guard';
import { AuthenticationService } from './login/auth.service';
import { EditApplicationComponent } from './application-management/edit-application/edit-application.component';
import { ApplyErrorComponent } from './apply-error/apply-error.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    CdkTableModule,
    MatExpansionModule,
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
    MatStepperModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ApplicationService,
    MatIconRegistry,
    MatError,
    MatChipInput,
    MatChipRemove],

  declarations: [
  HomeComponent,
  RecipeManagementComponent,
  AboutUsComponent,
  ContactUsComponent,
  ApplicationComponent,
  LoginComponent,
  EditApplicationComponent,
  ApplyErrorComponent,
  SignUpComponent],

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
export class VarsityChefsModule { }

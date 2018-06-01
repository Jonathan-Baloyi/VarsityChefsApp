import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
  MatTableModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatNativeDateModule,
  MatError,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration } from './api-configuration';
import { VarsityChefsModule } from './components/varsity-chefs.module';
import { ApplicationService } from './services';
import { AuthService } from './services/auth.service';
import { AccountsService } from './services/accounts.service';
import { DashboardService } from './services/dashboard.service';
import { ExternalAuthService } from './services/external-auth.service';
import { ProfileService } from './services/profile.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VarsityChefsModule
  ],
  providers: [ApiConfiguration,
    ApplicationService,
    AuthService,
    AccountsService,
    DashboardService,
    ExternalAuthService,
    ProfileService
  ],
  bootstrap: [AppComponent],
  exports: [
    AppRoutingModule,
    HttpClientModule,
    VarsityChefsModule
  ]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Application } from '../../../models';
import { ApplicationService } from '../../../services';
import { Alert } from 'selenium-webdriver';
import { ApplicantService } from '../../../services/applicant.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  application: Application = {postalAddress: {}, residentialAddress: {}};
  genders = [{ value: true, text: 'Male' }, { value: false, text: 'Female' }];
  nationality = [
    { value: true, text: 'South African' },
    { value: false, text: 'Other' }
  ];
  nationalityCheck = true;
  permanantRes1 = false;
  permanantRes2 = false;

  address1 = false;
  address2 = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  isIdValid: boolean;

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    private applicantService: ApplicantService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit() {

    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cellNumber: ['', Validators.required && Validators.pattern(/^((\+[0-9]{2})|[0])[0-9]{2}([ -])?[0-9]{3}([ -])?[0-9]{4}$/)],
      Telephone: ['', Validators],
      email: ['', Validators.required && Validators.pattern(/^[a-z0-9]+([.-][_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/i)],
      nationality: [''],
      specifyNat: [''],
      IdNumber: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      passport: ['']

    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });

    this.applicantService
      .ByIdentityIdGet(localStorage.getItem('Id'))
      .subscribe(x => {
        this.application.firstName = x.firstName;
        this.application.lastName = x.lastName;
        this.application.cellNumber = x.phoneNumber;
        this.application.email = x.email;
      });
  }

  onChange1(event) {
    if (event.checked === true) {
      this.permanantRes2 = false;
      this.application.doYouHaveApermentResidence = true;
    }
  }

  onChange2(event) {
    if (event.checked === true) {
      this.permanantRes1 = false;
      this.application.doYouHaveApermentResidence = false;
    }
  }

  onChangeAddress1(event) {
    if (event.checked === true) {
      this.address2 = false;
      this.application.residentialAddress.resLine1 = this.application.postalAddress.postalLine1;
      this.application.residentialAddress.resLine2 = this.application.postalAddress.postalLine2;
      this.application.residentialAddress.resLine3 = this.application.postalAddress.postalLine3;

    }
  }

  onChangeAddress2(event) {
    if (event.checked === true) {
      this.address1 = false;
    }
  }

  public pickUpChange(idObject) {

    const changed = idObject.value;

    if ( idObject.validity.valid === true) {
      this.isIdValid = true;
      const yearOfBirth = changed[0] + changed[1];
      const monthOfBirth = changed[2] + changed[3];
      const dayOfBirth = changed[4] + changed[5];
      const checkGender = changed[6];
      const currentYear = new Date().getFullYear().toString();

      const currentDecade: string = currentYear[2] + currentYear[3];
      const currentCentury = currentYear[0] + currentYear[1];
      let year = parseInt(yearOfBirth, 10);
      const gender = parseInt(checkGender, 10);
      let gndr = false;

      if (yearOfBirth > currentDecade) {
        year += (parseInt(currentCentury, 10) - 1) * 100;
      } else {
        year += parseInt(currentCentury, 10) * 100;
      }
      if (gender >= 0 && gender <= 4) {
        gndr = false;
      } else if (gender >= 5 && gender <= 9) {
        gndr = true;
      }

      this.application.gender = gndr;

      this.application.dateOfBirth = `${year}-${monthOfBirth}-${dayOfBirth}T00:00:00.000Z`;
    } else {
      this.isIdValid = false;
      alert('Invalid ID No');
    }
  }

  onSubmit(f: NgForm) {
    if (this.nationalityCheck === true) {
      this.application.nationality = 'South African';
    }
    debugger;
    this.applicationService.ApiApplicationPost(this.application).subscribe(
      x => {
        alert(x);
      },
      err => {
        alert(err);
      }
    );
  }

  backToSubjects() {
    this.router.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Application } from '../../../models';
import { ApplicationService } from '../../../services';
import { Alert } from 'selenium-webdriver';
import { ApplicantService } from '../../../services/applicant.service';
import { Patterns } from '../../validators/Patterns';
import * as moment from 'moment/moment';

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

  constructor(
    private router: Router,
    public patterns: Patterns,
    private applicationService: ApplicationService,
    private applicantService: ApplicantService,
  ) {}

  ngOnInit() {

    debugger;
    this.applicantService
      .ByIdentityIdGet(localStorage.getItem('Id'))
      .subscribe(x => {
        debugger;
         this.application.applicantId = x.id;
        this.application.firstName = x.firstName;
        this.application.lastName = x.lastName;
        this.application.cellNumber = x.phoneNumber;
        this.application.email = x.email;

        // Comment out the code when you get home
        // if (x.id > 0) {
        //   this.applicationService
        //  .ApiApplicationByEmailGet(x.email)
        //  .subscribe(appl => {
        //     this.application = appl;
        //   });
        // }


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

    if ( idObject.valid === true) {

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
      console.log('Invalid Id Number');
    }
  }

  onSubmit(f: NgForm) {
    if (this.nationalityCheck === true) {
      this.application.nationality = 'South African';
    }
    this.application.dateOfBirth = moment(this.application.dateOfBirth).format('YYYY-MM-DDT00:00:00.000Z');

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

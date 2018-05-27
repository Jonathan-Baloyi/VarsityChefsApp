import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Application } from '../../../models';
import { ApplicationService } from '../../../services';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  application: Application = {};
  genders = [{ value: true, text: 'Male' }, { value: false, text: 'Female' }];
  nationality = [{ value: true, text: 'South African' }, { value: false, text: 'Other' }];
  nationalityCheck = true;

  constructor(private router: Router, private applicationService: ApplicationService) { }

  ngOnInit() {
  }

  public pickUpChange(idObject, changed) {
    if (idObject.valid === true) {
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
      alert('Invalid ID No');
    }
  }

  onSubmit(f: NgForm) {
    if (this.nationalityCheck === true) {
      this.application.nationality = 'South African';
    }

    this.applicationService.ApiApplicationPost(this.application).subscribe(x => {
      alert(x);
    }, err => {
      alert(err);
    });
  }

  backToSubjects() {
      this.router.navigate(['/home']);
  }

}

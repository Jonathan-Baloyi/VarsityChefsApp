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

  constructor(private router: Router, private applicationService: ApplicationService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
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

import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private applicationService: ApplicationService) { }

  login() {
    this.applicationService.ApiLoginGet({email: this.email, password: this.password})
    .subscribe(x => {
        debugger;
    });

  }

  ngOnInit() {
  }

}

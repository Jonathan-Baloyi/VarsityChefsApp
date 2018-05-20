import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models';
import { AuthenticationService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private applicationService: ApplicationService,
    private authenticationService: AuthenticationService,
  private router: Router) { }

  login() {
    this.applicationService.ApiLoginGet({email: this.email, password: this.password})
    .subscribe(x => {
        if ( x === true) {
         // this.router.navigate([this.authenticationService.urlRedirect]);
        } else {
          alert('Incorrect username or password');
        }
    });

  }

  ngOnInit() {
  }

}

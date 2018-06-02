import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { Application } from '../../models';
import { AuthenticationService } from './auth.service';
import { Router } from '@angular/router';
import { CredentialsViewModel } from '../../models/credentials-view-model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 private user: CredentialsViewModel = {userName: '', password: ''};

  constructor(private applicationService: ApplicationService,
    private authenticationService: AuthenticationService,
    private auth: AuthService,
    private router: Router) { }

  login() {
    this.auth.ApiAuthLoginPost(this.user).subscribe(results => {
        if (results) {
          localStorage.setItem('auth_token', results.auth_token);
          this.authenticationService.isLoggedIn = true;
          window.location.reload();
          this.router.navigate(['apply']);

        }

    }, error => {
      alert( JSON.stringify(error.error));
    });
  }

  ngOnInit() {
  }

}

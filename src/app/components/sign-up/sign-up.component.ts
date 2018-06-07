import { Component, OnInit } from '@angular/core';
import { RegistrationViewModel } from '../../models/registration-view-model';
import { ApplicationService } from '../../services';
import { AuthenticationService } from '../login/auth.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AccountsService } from '../../services/accounts.service';
import { CredentialsViewModel } from '../../models/credentials-view-model';
import { Patterns } from '../validators/Patterns';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private user: RegistrationViewModel = { email: '', firstName: '', lastName: '', phoneNumber: '', password: '' };
  private confirmPass = '';
  private confirm = true;

  constructor(
    private applicationService: ApplicationService,
    private authenticationService: AuthenticationService,
    private accountService: AccountsService,
    private auth: AuthService,
    private router: Router,
    private patterns: Patterns
  ) {}

  ngOnInit() {
  }

  public pickUpChange(changed) {
    if (!confirm) {
      return;
    } else {
      this.confirm = true;
    }

    if (changed !== this.user.password) {
        this.confirm = false;
    }
  }
  signUp() {
    this.accountService.ApiAccountsPost(this.user).subscribe(results => {
      if (results) {
        alert(results);
        this.router.navigate(['/login']);

      }
    },  error => {
      alert(JSON.stringify(error.error));
    });
  }

}

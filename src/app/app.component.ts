import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './components/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  navLinks = [{ path: '/home', label: 'Home' },
  { path: '/recipe', label: 'Recipes' },
  { path: '/apply', label: 'Apply' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
  // { path: 'edit', label: 'Edit application'}
  ];
  show;

  constructor(private authServ: AuthenticationService,
              private router: Router) {
                this.show = this.authServ.isLoggedIn;

  }

  ngOnInit() {
    if (localStorage.length > 0) {
      this.show = true;
   }
  }

  logout() {
    this.show = false;
    localStorage.clear();

    this.router.navigate(['/home']);
  }
}

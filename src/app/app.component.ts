import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [{ path: '/home', label: 'Home' },
  { path: '/recipe', label: 'Recipes' },
  { path: '/apply', label: 'Apply' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
  { path: 'edit', label: 'Edit application'}
  ];
  title = 'app';
}

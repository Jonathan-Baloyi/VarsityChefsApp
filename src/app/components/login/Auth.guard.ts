import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (localStorage.length === 0) {
            this.authenticationService.isLoggedIn = false;
           this.router.navigate(['/login']);
           return false;
        }
        this.authenticationService.isLoggedIn = true;
        return true;
    }
}

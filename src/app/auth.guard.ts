import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger
        if (localStorage.getItem('auth_token')) {
            // logged in so return true
            return true;
        }
        else{
            this.router.navigate(['/login']);
            return false; 
        }
        // not logged in so redirect to login page with the return url
      //  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
     
    }
}
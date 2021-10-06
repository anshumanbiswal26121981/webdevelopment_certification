//service to block access to certain routes where this class [AuthGuard] is applied on a route in the config

import {CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from  'rxjs'
import { Injectable } from '@angular/core';
  
import { AuthService } from './auth.service'; //import user defined service that validates if user has logged in
  
  @Injectable()
  export class AuthGuard implements CanActivate { //implements system  defined interface
    constructor(private authService: AuthService, private router: Router) { } //Dependency Injection
  
    canActivate(route: ActivatedRouteSnapshot, //return true, grants access to that url route under [AuthGuard]
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        
        return this.authService.isAuthenticated() //validate if user has logged in
          .then((authenticated: boolean) => {
                  if (authenticated) {    //if user has logged in , grant grants access to that url
                    return true;
                  } else{
                    this.router.navigate(['/']); //else navigate ther user back to '/' default home
                  }
                    return false;
             }
          );
    }
  
    canActivateChild(route: ActivatedRouteSnapshot, //calls the above method to grant access to child routes
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

         return this.canActivate(route, state); //activate the route url/grant access to it
    }
  }
  
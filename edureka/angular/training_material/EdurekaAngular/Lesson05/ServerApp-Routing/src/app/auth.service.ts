//service to validate if user is logged in

import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private loggedIn = false;
  
    isAuthenticated() {  //validate if user is authenticated based on true/false value of loggedIn variable
      const promise = new Promise( (resolve, reject) => {
               resolve(this.loggedIn);
          }
      );
      return promise;
    }
  
    login() { //set user defined variable to true on log in
      this.loggedIn = true;
    }
  
    logout() { //set user defined variable to false on log out
      this.loggedIn = false;
    }
  }
  
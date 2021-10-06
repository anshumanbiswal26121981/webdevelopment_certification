//custom service class to validate the password.

import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  patternValidator(): ValidatorFn {//match pattern
    return (control: AbstractControl): { [key: string]: any } => {
       //get value enterted in the control
      if (!control.value) {//if control has no value entered
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      //Password should have min. 8 characters, min. 1 uppercase ,min. 1 lowercase & 1 number 

      const valid = regex.test(control.value);
      return valid ? null : { invalidPassword: true }; 
      //if invalid passsword return that else return null
    };
  }

  MatchPassword(password: string, confirmPassword: string) {//match password
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        //if controls are not found on the form
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) { 
        //if validation errors
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) { 
        //if textbox values dont match
        confirmPasswordControl.setErrors({ passwordMismatch: true }); //set error
      } else {
        confirmPasswordControl.setErrors(null); // else remove error 
      }
    }
  }

  userNameValidator(userControl: AbstractControl) {
    //validate username availability in the array below
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {//call custom function below
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {
    /* A dummy local  array is used to validate the availability of user names.
       Ideally it should be a service call to the server to search the value from a database.
    */

    const UserList = ['ankit', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }
}

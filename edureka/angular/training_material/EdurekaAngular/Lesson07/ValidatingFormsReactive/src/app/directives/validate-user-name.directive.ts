//custom directive that comsumes userNameValidator() function from the customvalidation.service

import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { Observable } from 'rxjs';

@Directive({
  selector: '[appValidateUserName]', //custom directive name
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ValidateUserNameDirective), multi: true }]
  //register this as custom validator, This class name registered as validator,can be used on multiple controls
  //NG_VALIDATORS is an injection token for registering validators 
})
export class ValidateUserNameDirective implements Validator {  //class must implement Validator

  constructor(private customValidator: CustomvalidationService) { }  //DI of custom service object

  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
   //function to validate pattern of data enetred in the textbox

    return this.customValidator.userNameValidator(control);
    //call the customvalidation service method to validate text box value
    //connecting custom validation function with this directive
  }

}

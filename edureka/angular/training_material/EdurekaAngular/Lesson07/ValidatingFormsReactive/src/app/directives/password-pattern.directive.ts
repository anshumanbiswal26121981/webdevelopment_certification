//custom directive that comsumes patternValidator() function from the customvalidation.service

import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appPasswordPattern]', //custom directive name
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordPatternDirective, multi: true }]
    //register this as custom validator, This class name registered as validator,can be used on multiple controls
    //NG_VALIDATORS is an injection token for registering validators 
})
export class PasswordPatternDirective implements Validator { //class must implement Validator

  constructor(private customValidator: CustomvalidationService) { } //DI of custom service object

  validate(control: AbstractControl): { [key: string]: any } | null {
   //function to validate pattern of data enetred in the textbox

    return this.customValidator.patternValidator()(control);
    //call the customvalidation service method to validate text box value
    //connecting custom validation function with this directive
  }
}

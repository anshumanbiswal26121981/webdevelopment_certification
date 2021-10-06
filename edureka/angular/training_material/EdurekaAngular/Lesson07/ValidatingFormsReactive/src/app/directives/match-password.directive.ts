//custom directive that comsumes MatchPassword() function from the customvalidation.service

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';

@Directive({
  selector: '[appMatchPassword]', //custom directive name
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchPasswordDirective, multi: true }]
    //register this as custom validator, This class name registered as validator,can be used on multiple controls
    //NG_VALIDATORS is an injection token for registering validators 
})
export class MatchPasswordDirective implements Validator { //class must implement Validator 
  @Input('appMatchPassword') MatchPassword: string[] = [];//binds to textboxes names array to match values

  constructor(private customValidator: CustomvalidationService) { }//DI of custom service object

  validate(formGroup: FormGroup): ValidationErrors {
    //function to validate if two text fields values match else it returns error
    //function accepts the form group to validate

    return this.customValidator.MatchPassword(this.MatchPassword[0], this.MatchPassword[1])(formGroup);
    //call the customvalidation service method to validate text boxes values
    //connecting custom validation function with this directive
  }

}

//creating custom directive that refrences the custom validator

import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { MustMatch } from './must-match.validator'; //custom validator

@Directive({
    selector: '[mustMatch]',  //custom validator (directive) name
    providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
    //register this as custom validator, 
    //This class name registered as validator,can be used on multiple controls
    //NG_VALIDATORS is an injection token for registering validators 
})
export class MustMatchDirective implements Validator { //class must implement Validator 
    @Input('mustMatch') mustMatch: string[] = []; 
    //binds to textboxes names array to match values

    validate(formGroup: FormGroup): ValidationErrors {
        //function to validate if two text fields values match else it returns error
        //function accepts the form group to validate
        
        return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
        //calling the custom validator function MustMatch
        //connecting custom validation function with this directive
    }
}
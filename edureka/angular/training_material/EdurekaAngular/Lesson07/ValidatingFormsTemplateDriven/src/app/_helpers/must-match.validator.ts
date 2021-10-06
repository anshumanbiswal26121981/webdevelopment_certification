import { FormGroup } from '@angular/forms'; 
// custom validator to check that tboth the field's values match

export function MustMatch(controlName: string, matchingControlName: string) { 
                        //custom validator function
                        //accepts two controls names to match thier values
    
    return (formGroup: FormGroup) => {
        
        //get ref to the controls on the formGroup array by passing the specific controls names
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
          return null;
        }

        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails & both controls vlaues do not match
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

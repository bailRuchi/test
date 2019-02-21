import {AbstractControl} from '@angular/forms';
export class PasswordValidation {

   static MatchPassword(control: AbstractControl) {
      let password = control.get('password').value; // to get value in input tag
      let confirmPassword = control.get('confirmPassword').value; // to get value in input tag
      if(password != confirmPassword) {
           control.get('confirmPassword').setErrors( {MatchPassword: true} )
       } else {
           return null
       }
   }
}
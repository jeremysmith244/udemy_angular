import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {

    static matchesOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        // Because this is an async return, need to return a promise, check AcyncValidatorFn in docs
        return new Promise((resolve, reject) => {
            // This is to represent a call to the server, 
            // as an example of ansynchronous, or non-blocking operations
            setTimeout(() => {
                if (control.value === '1234')
                    // resolve replaces return for a Promise
                    resolve (null);
                else 
                    resolve ({ doesNotMatch: true});
            }, 2000);
        });
    }
    static comparePasswords(control: AbstractControl) : ValidationErrors | null {
        if (control.get('new1')?.value != control.get('new2')?.value) {
            return { passwordsDoNotMatch: true};
        }
        return null;
    }
}
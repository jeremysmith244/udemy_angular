import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    // We DONT want to have to access this method only from within this class!
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0)
            // Return any object that explains something about the error
            return { cannotContainSpace: true}
        return null;
    } 

    static shouldBeUnique(control: AbstractControl) : Promise<ValidationErrors | null> {
        // Because this is an async return, need to return a promise, check AcyncValidatorFn in docs
        return new Promise((resolve, reject) => {
            // This is to represent a call to the server, 
            // as an example of ansynchronous, or non-blocking operations
            setTimeout(() => {
                if (control.value === 'Jeremy')
                    // resolve replaces return for a Promise
                    resolve ({ shouldBeUnique: true});
                else 
                    resolve (null);
            }, 2000);
        });
    }
}
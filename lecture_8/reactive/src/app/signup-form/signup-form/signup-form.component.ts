import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  minLen = 3;
  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required,
      Validators.minLength(this.minLen),
      UsernameValidators.cannotContainSpace],
      UsernameValidators.shouldBeUnique),
    'password': new FormControl('', Validators.required),
  });

  login() {
    if (true) {
      this.form.setErrors({
        invalidLogin: true
      })
    }
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  checkUserNameMissing() {
    if (this.username?.touched && this.username.errors)
      return this.username.errors.required;
    return false;
  }

  checkUserNameShort() {
    if (this.username?.touched && this.username.errors)
      if ('minlength' in this.username.errors)
        return true;
    return false;
  }

  checkSpaces() {
    if (this.username?.touched && this.username.errors)
      return this.username.errors.cannotContainSpace;
    return false;
  }

  checkUnique() {
    if (this.username?.touched && this.username.errors)
      return this.username.errors.shouldBeUnique;
    return false;
  }

  checkPassword() {
    return (this.password?.touched && this.password.invalid) ? true : false;
  }
}

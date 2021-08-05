import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-horm',
  templateUrl: './password-horm.component.html',
  styleUrls: ['./password-horm.component.css']
})
export class PasswordHormComponent {

  valid = true;
  submitted = false;
  form = new FormGroup({
    old: new FormControl('', Validators.required, PasswordValidators.matchesOldPassword),
    new1: new FormControl('', Validators.required),
    new2: new FormControl('', Validators.required)
  }, PasswordValidators.comparePasswords)

  get old() {
    return this.form.get('old') as FormControl;
  }
  get new1() {
    return this.form.get('new1') as FormControl;
  }
  get new2() {
    return this.form.get('new2') as FormControl;
  }

  checkOldMissing() {
    if (this.old?.touched && this.old.errors)
      return this.old.errors.required;
    return false;
  }
  checkNew1Missing() {
    if (this.new1?.touched && this.new1.errors)
      return this.new1.errors.required;
    return false;
  }
  checkNew2Missing() {
    if (this.new2?.touched && this.new2.errors)
      return this.new2.errors.required;
    return false;
  }
  checkOldCorrect() {
    if (this.old?.touched && this.old.errors)
      return this.old.errors.doesNotMatch;
    return false;
  }
  checkMatching() {
    if (this.form.errors)
      return this.form.errors.passwordsDoNotMatch;
    return false;
  }

  change() {
    if (this.form.errors || this.old.errors || this.new1.errors || this.new2.errors) {
      this.valid = false;
      this.submitted = true;
    }
    else {
      this.valid = true;
      this.submitted = true;
    }
  }

}

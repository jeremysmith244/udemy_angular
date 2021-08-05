import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form/signup-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { PasswordHormComponent } from './password-horm/password-horm.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseFormComponent,
    FormBuilderComponent,
    PasswordHormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

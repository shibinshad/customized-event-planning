// user.module.ts
import { NgModule } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormValidationService } from './services/form-validation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SignupComponent, HomepageComponent],
  imports: [ReactiveFormsModule,CommonModule],
  providers: [FormValidationService],
  exports: [SignupComponent, HomepageComponent]
})
export class UserModule {}

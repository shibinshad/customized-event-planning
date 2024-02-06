// user.module.ts
import { NgModule, Renderer2 } from '@angular/core';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormValidationService } from './services/form-validation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OtpVerificationComponent } from './components/signup/otp-verification/otp-verification.component';

@NgModule({
  declarations: [SignupComponent, HomepageComponent, OtpVerificationComponent],
  imports: [ReactiveFormsModule,CommonModule,],
  providers: [FormValidationService,],
  exports: [SignupComponent, HomepageComponent]
})
export class UserModule {}

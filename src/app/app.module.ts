import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OtpVerificationComponent } from './componenets/signup/otp-verification/otp-verification.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './componenets/homepage/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    OtpVerificationComponent,
    SignupComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

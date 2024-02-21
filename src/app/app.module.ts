import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OtpVerificationComponent } from './componenets/signup/otp-verification/otp-verification.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './componenets/homepage/nav-bar/nav-bar.component';
import { LoginPageComponent } from './componenets/login-page/login-page.component';
import { AboutPageComponent } from './componenets/about-page/about-page.component';
import { ContactComponent } from './componenets/contact_page/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    OtpVerificationComponent,
    SignupComponent,
    NavBarComponent,
    LoginPageComponent,
    ContactComponent,
    AboutPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

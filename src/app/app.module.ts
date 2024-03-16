import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OtpVerificationComponent } from './components/signup/otp-verification/otp-verification.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/homepage/nav-bar/nav-bar.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactComponent } from './components/contact_page/contact.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { ConcertComponent } from './components/concert/concert.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { IntercepterService } from './service/intercepter.service';
import { LocationsComponent } from './components/locations/locations.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { CommonModule } from '@angular/common';
import { CateringComponent } from './components/catering/catering.component';
import { MediaComponent } from './components/media/media.component';
import { DecorationsComponent } from './components/decorations/decorations.component';
import { pipesin } from './pipes/customPipes.pipe';
import { pipesin2 } from './pipes/customPipes2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OtpVerificationComponent,
    SignupComponent,
    NavBarComponent,
    LoginPageComponent,
    ContactComponent,
    AboutPageComponent,
    WeddingComponent,
    BirthdayComponent,
    ConcertComponent,
    MeetingComponent,
    LocationsComponent,
    AddServicesComponent,
    CateringComponent,
    MediaComponent,
    DecorationsComponent,
    pipesin,
    pipesin2,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CommonModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

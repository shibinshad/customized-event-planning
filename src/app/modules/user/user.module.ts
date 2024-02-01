import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [SignupComponent, HomepageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [SignupComponent],
  exports:[SignupComponent,HomepageComponent]
})
export class UserModule {}

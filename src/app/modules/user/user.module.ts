import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [SignupComponent],
  exports:[SignupComponent]
})
export class UserModule {}

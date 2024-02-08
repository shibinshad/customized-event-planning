// user.module.ts
import { NgModule, Renderer2 } from '@angular/core';
import { HomepageComponent } from '../../componenets/homepage/homepage.component';
import { FormValidationService } from './services/form-validation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';

@NgModule({
  declarations: [ HomepageComponent, UserHomeComponent],
  imports: [ReactiveFormsModule,CommonModule,],
  providers: [FormValidationService,],
  exports: [ HomepageComponent]
})
export class UserModule {}

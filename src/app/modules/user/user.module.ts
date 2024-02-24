// user.module.ts
import { NgModule, Renderer2 } from '@angular/core';
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { FormValidationService } from './services/form-validation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { userRoutingModule } from './user_route.module';

@NgModule({
  declarations: [ HomepageComponent, UserHomeComponent, ProfileComponent],
  imports: [ReactiveFormsModule,CommonModule,userRoutingModule],
  providers: [FormValidationService,],
  exports: [ HomepageComponent]
})
export class UserModule {}

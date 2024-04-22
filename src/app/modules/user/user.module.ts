// user.module.ts
import { NgModule } from '@angular/core';
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { FormValidationService } from './services/form-validation.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { userRoutingModule } from './user_route.module';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CartComponent } from './components/cart/cart.component';
import { PopupComponent } from '../shared/popup/popup.component';

@NgModule({
  declarations: [ HomepageComponent, UserHomeComponent, ProfileComponent,CartComponent],
  imports: [ReactiveFormsModule,CommonModule,userRoutingModule,LoadingComponent,PopupComponent],
  providers: [FormValidationService,],
  exports: [ HomepageComponent]
})
export class UserModule {}

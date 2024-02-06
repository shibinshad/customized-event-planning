import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './modules/user/components/signup/signup.component';
import { HomepageComponent } from './modules/user/homepage/homepage.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

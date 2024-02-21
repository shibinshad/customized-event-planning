import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './componenets/homepage/homepage.component';
import { SignupComponent } from './componenets/signup/signup.component';
import { LoginPageComponent } from './componenets/login-page/login-page.component';
import { ContactComponent } from './componenets/contact_page/contact.component';
import { AboutPageComponent } from './componenets/about-page/about-page.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contact', component: ContactComponent },
  {path:'about',component:AboutPageComponent},
  {path:'admin',loadChildren:()=>import('./modules/admin/admin.module').then((e)=>e.Adminmodule)},
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then((e)=>e.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

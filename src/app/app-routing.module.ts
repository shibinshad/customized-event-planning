import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactComponent } from './components/contact_page/contact.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { WeddingComponent } from './components/wedding/wedding.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'wedding', component: WeddingComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((e) => e.Adminmodule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((e) => e.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

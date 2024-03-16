import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ContactComponent } from './components/contact_page/contact.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { ConcertComponent } from './components/concert/concert.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { AuthGuard } from './guard/AuthGuard.guard';
import { LoginGuard } from './guard/login.guard';
import { AgencyGuard } from './modules/agency/guard/agency.guard';
import { LocationsComponent } from './components/locations/locations.component';
import { CateringComponent } from './components/catering/catering.component';
import { MediaComponent } from './components/media/media.component';
import { DecorationsComponent } from './components/decorations/decorations.component';

const routes: Routes = [
  { path: 'signup',canActivate:[LoginGuard], component: SignupComponent },
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'contact',canActivate:[AuthGuard], component: ContactComponent },
  { path: 'about', canActivate:[AuthGuard],component: AboutPageComponent },
  { path: 'wedding', canActivate:[AuthGuard], component: WeddingComponent },
  { path: 'birthday',canActivate:[AuthGuard], component: BirthdayComponent },
  { path: 'concert',canActivate:[AuthGuard], component: ConcertComponent },
  { path: 'meeting',canActivate:[AuthGuard], component: MeetingComponent },
  { path: 'locations',canActivate:[AuthGuard], component: LocationsComponent },
  { path: 'catering',canActivate:[AuthGuard], component: CateringComponent },
  { path: 'media',canActivate:[AuthGuard], component: MediaComponent },
  { path: 'decorations',canActivate:[AuthGuard], component: DecorationsComponent },






  {
    path: 'agency',
    canActivate:[AgencyGuard],
    loadChildren: () =>
      import('./modules/agency/agency.module').then((e) => e.AgencyModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./modules/user/user.module').then((e) => e.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((e) => e.Adminmodule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

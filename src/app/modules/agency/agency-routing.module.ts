import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { LocationFormComponent } from './location-form/location-form.component';
import { CateringFormComponent } from './catering-form/catering-form.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { DecorationFormComponent } from './decoration-form/decoration-form.component';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { ShomeComponent } from './shome/shome.component';


const routes: Routes = [
  { path: 'home', component: AgencyHomeComponent },
  { path: 'locationForm', component: LocationFormComponent },
  { path:'cateringForm',component:CateringFormComponent},
  { path:'mediaForm',component:MediaFormComponent},
  { path:'decorationForm',component:DecorationFormComponent},
  { path:'profile',component:AgencyProfileComponent},
  { path:'shome',component:ShomeComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}

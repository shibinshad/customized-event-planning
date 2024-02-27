import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { LocationFormComponent } from './location-form/location-form.component';

const routes: Routes = [
  { path: 'home', component: AgencyHomeComponent },
  { path: 'locationForm', component: LocationFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}

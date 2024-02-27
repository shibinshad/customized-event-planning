import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyComponent } from './agency.component';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { LocationFormComponent } from './location-form/location-form.component';

@NgModule({
  declarations: [AgencyComponent, AgencyHomeComponent, LocationFormComponent],
  imports: [CommonModule, AgencyRoutingModule],
})
export class AgencyModule {}

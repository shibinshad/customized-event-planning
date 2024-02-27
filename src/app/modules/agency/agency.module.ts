import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyComponent } from './agency.component';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { LocationFormComponent } from './location-form/location-form.component';
import { CateringFormComponent } from './catering-form/catering-form.component';
import { FormsModule } from '@angular/forms';
import { MediaFormComponent } from './media-form/media-form.component';
import { DecorationFormComponent } from './decoration-form/decoration-form.component';

@NgModule({
  declarations: [AgencyComponent, AgencyHomeComponent, LocationFormComponent, CateringFormComponent, MediaFormComponent, DecorationFormComponent],
  imports: [CommonModule, AgencyRoutingModule,FormsModule],
})
export class AgencyModule {}

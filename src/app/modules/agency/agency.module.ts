import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgencyComponent } from './agency.component';
import { AgencyHomeComponent } from './agency-home/agency-home.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { LocationFormComponent } from './location-form/location-form.component';
import { CateringFormComponent } from './catering-form/catering-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MediaFormComponent } from './media-form/media-form.component';
import { DecorationFormComponent } from './decoration-form/decoration-form.component';
import { AgencyProfileComponent } from './agency-profile/agency-profile.component';
import { AlertComponent } from './alert/alert.component';
import { ShomeComponent } from './shome/shome.component';
import { pipesin2 } from 'src/app/pipes/customPipes2.pipe';
import { AgencyService } from './service/agency.service';

@NgModule({
  declarations: [
    AgencyComponent,
    AgencyHomeComponent,
    LocationFormComponent,
    CateringFormComponent,
    MediaFormComponent,
    DecorationFormComponent,
    AgencyProfileComponent,
    AlertComponent,
    ShomeComponent,
    pipesin2,
  ],
  imports: [CommonModule, AgencyRoutingModule, FormsModule,ReactiveFormsModule],
})
export class AgencyModule {}

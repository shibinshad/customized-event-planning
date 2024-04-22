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
import { ShowMediaComponent } from './shome/show-media/show-media.component';
import { ShowCateringComponent } from './shome/show-catering/show-catering.component';
import { ShowLocationComponent } from './shome/show-location/show-location.component';
import { ShowDecorationComponent } from './shome/show-decoration/show-decoration.component';
import { LoadingComponent } from '../shared/loading/loading.component';

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
    ShowMediaComponent,
    ShowCateringComponent,
    ShowLocationComponent,
    ShowDecorationComponent,
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent
  ],
})
export class AgencyModule {}

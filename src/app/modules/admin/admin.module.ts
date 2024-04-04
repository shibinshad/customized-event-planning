import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin_route.module';
import { UsersComponent } from './users/users.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { AdminComponent } from './admin/admin.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { CommonModule } from '@angular/common';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
@NgModule({
  declarations: [
    UsersComponent,
    AgenciesComponent,
    AdminComponent,
    PendingRequestComponent,
    AdminNavbarComponent,
    
  ],
  imports: [AdminRoutingModule,CommonModule],
  exports:[AdminNavbarComponent]
})
export class Adminmodule {}

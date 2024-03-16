import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { PendingRequestComponent } from './pending-request/pending-request.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'dashbord', component: AdminDashbordComponent },
  { path: 'admin', component:AdminComponent  },
  { path: 'agencies', component: AgenciesComponent },
  { path: 'pendingRequest', component: PendingRequestComponent },

  {
    path: '',
    redirectTo: '/admin/dashbord',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

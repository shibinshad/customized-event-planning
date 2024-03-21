import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ChatComponent } from '../shared/chat/chat.component';

const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'chat', component: ChatComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userRoutingModule {}

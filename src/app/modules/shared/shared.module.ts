import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SharedComponent } from './shared.component';



@NgModule({
  declarations: [
    ChatComponent,
    SharedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

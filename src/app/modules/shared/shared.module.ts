import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { SharedComponent } from './shared.component';
import { LoadingComponent } from './loading/loading.component';
import { CartComponent } from '../user/components/cart/cart.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    ChatComponent,
    SharedComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    LoadingComponent
  ],
  exports:[
    
  ]
  
})
export class SharedModule { }

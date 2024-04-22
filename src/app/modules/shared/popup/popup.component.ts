import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone:true,
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Output()  close = new EventEmitter();
  decline(){
    this.close.emit(false);
  }

  confirm(){
    this.close.emit(true)
  }
}

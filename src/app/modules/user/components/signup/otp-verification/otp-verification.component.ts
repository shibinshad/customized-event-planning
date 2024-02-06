import { Component } from '@angular/core';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {

  autonext(event:any){
    const input = event.target;
    const nextInput = event.target.nextElementSibling;

    if(input.value.length === 1 && nextInput){
      nextInput.focus()
    }

  }
}

import { Component } from '@angular/core';
import { FormValidationService } from 'src/app/modules/user/services/form-validation.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {

  constructor(private serv:FormValidationService){}

  autonext(event:any){
    const input = event.target;
    const nextInput = event.target.nextElementSibling;

    if(input.value.length === 1 && nextInput){
      nextInput.focus()
    }

  }

  // onVerify(){
  //   console.log('verify otp clicked');
  //   this.serv.verifyOtp()
  // }
}

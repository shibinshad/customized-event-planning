import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent {
  OtpInput: string = '';
  @Input() data: any;

  otp=['']

  constructor(private serv:  CommonService,private router:Router) {}

  autonext(event: any) {
    const OtpInput = event.target;
    const nextInput = event.target.nextElementSibling;

    if (OtpInput.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }

  onVerify() {
    try{
      console.log(this.otp);
      const iotp=this.otp.join('')
      console.log(iotp);
      
      console.log('verify otp clicked');
      const one={...this.data,iotp}
      console.log(one);
      
    this.serv
      .verifyOtp(one)
      .subscribe((e) => {
        console.log(e);
        if(e.success){
          this.router.navigate(['/'])
          console.log(e.token)
        }
      });
    }catch(err){
      console.log('onVerify errrrrrr',err);
    }
  }
}

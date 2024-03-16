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
  role: any;

  otp = ['']

  constructor(private serv: CommonService, private router: Router) { }

  autonext(event: any) {
    const OtpInput = event.target;
    const nextInput = event.target.nextElementSibling;

    if (OtpInput.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }

  onVerify() {

    try {
      console.log(this.role);
      console.log(this.otp);
      const iotp = this.otp.join('')
      console.log(iotp);

      console.log('verify otp clicked');
      const one = { ...this.data, iotp }
      console.log(one);

      this.serv
        .verifyOtp(one)
        .subscribe((e) => {
          console.log('verify otp');
          console.log(e);
          localStorage.setItem('role',e.role)
          localStorage.setItem('token',e.token)
          
          if (e.success) {
            this.role=localStorage.getItem('role')
            console.log('inside if e.success');
            if (this.role == 'admin') {
              console.log('admin');
              this.router.navigate(['/admin/home'])
            } else if (this.role == 'user') {
              console.log('user');
              this.router.navigate(['/'])
            } else if (this.role=='agency'){
              this.router.navigate(['/agency/home'])
            }
            console.log(e.token)
          }
        });
    } catch (err) {
      console.log('onVerify errrrrrr', err);
    }
  }
}




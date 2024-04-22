import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css'],
})
export class OtpVerificationComponent implements OnInit {

  showLoading:any;
  ngOnInit(): void {
    
  }
    


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
      this.showLoading=true;
      const iotp = this.otp.join('')
      const one = { ...this.data, iotp }

      this.serv
        .verifyOtp(one)
        .subscribe((e) => {
          console.log(e);
          localStorage.setItem('role',e.role)
          localStorage.setItem('token',e.token)
          this.showLoading=false;
          
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
              alert('please wait for confirmation')
              this.router.navigate(['/login'])
            }
            console.log(e.token)
          }
        });
    } catch (err) {
      console.log('onVerify errrrrrr', err);
    }
  }
}




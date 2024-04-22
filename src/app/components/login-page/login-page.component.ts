import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  // isAuthenticated: boolean = false;
  showLoading: any;

  constructor(
    private fb: FormBuilder,
    private service: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.isAuthenticated=true;
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe({
        next: (response) => {
          const user = response.existingUser;
          const role = response.existingUser.role;
          if (response.success) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
            if (role === 'agency') {
              if (user.isVerified == true) {
                this.router.navigate(['/agency/home']);
              } else {
                alert('the request is not verified');
                this.router.navigate(['/login']);
              }
            } else if (role === 'user') {
              this.showLoading = true;
              this.router.navigate(['/']);
            } else if (role == 'admin') {
              this.router.navigate([`/admin/dashbord`]);
              this.showLoading = true;
            }
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.error('Form is invalid');
    }
  }
}

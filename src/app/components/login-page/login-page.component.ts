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

  constructor(
    private fb: FormBuilder,
    private service: CommonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameOrEmail: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.service.login(this.loginForm.value).subscribe((response) => {
        console.log();
        const role = response.existingUser.role;
        if (response.success) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role',response.role)
          if (role === 'agency') {
            this.router.navigate(['/agency/home']);
          } else if (role === 'user') {
            this.router.navigate(['/']);
          }
        }
      });
    } else {
      console.error('Form is invalid');
    }
  }
}

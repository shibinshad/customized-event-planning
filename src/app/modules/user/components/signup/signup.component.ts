// signup.component.ts
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,16}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/
          ),
        ],
      ],

      confirmPassword: ['', [Validators.required, this.matchPasswords.bind(this)]],
    });
  }

  matchPasswords(control: AbstractControl) {
    const passwordControl = this.signupForm?.get('password');
    if (!passwordControl) {
        return null; // or handle the error appropriately
    }

    const password = passwordControl.value;
    const confirmPassword = control.value;

    return password === confirmPassword ? null : { mismatch: true };
}

  get username() {
    return this.signupForm.get('username');
  }

  getFormControl(name: string) {
    return this.signupForm.get(name)!;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched();
      console.log(
        'Password pattern error:',
        this.signupForm.get('password')?.hasError('pattern')
      );
    }
  }
}

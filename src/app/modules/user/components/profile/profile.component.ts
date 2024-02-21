import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: FormValidationService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      address: [''],
      bio: [''],
      phone: [''],
      dob: [''],
      avatar: [''],
    });
  }

  onSubmit(): void {
    // Handle form submission here
    console.log(this.profileForm.value);
    this.service.profile(this.profileForm.value).subscribe((res) => {
      alert('Profile Updated Successfully');
    });
  }
}

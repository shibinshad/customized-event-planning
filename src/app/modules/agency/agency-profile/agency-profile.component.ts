import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidationService } from '../../user/services/form-validation.service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css']
})
export class AgencyProfileComponent {
  profileForm!: FormGroup;
  formData = new FormData();
  profileData: any;
  profileDetails:any;
  img:string=''

  constructor(
    private fb: FormBuilder,
    private service: FormValidationService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      username: [''],
      email: [''],
      bio: [''],
      phone: [''],
      location: [''],
      avatar: [''],
    });
    this.get();
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      const val = this.profileForm.value;
      console.log(val);
      this.formData.append('username', val.username);
      this.formData.append('email', val.email);
      this.formData.append('bio', val.bio);
      this.formData.append('phone', val.phone);
      this.formData.append('location',val.location)
      this.service.profile(this.formData).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    this.formData = new FormData();
  }
  onChange(event: any) {
    const files = event.target.files;
    console.log(files);
    this.formData.append('avatar', files[0]);
  }
  
  get() {
    this.service.showProfile().subscribe({
      next: (profile) => {
        this.profileData = profile[0];
        console.log(this.profileData);
        this.profileDetails=this.profileData.userprofile[0]
        console.log(this.profileDetails);
        this.img=this.profileDetails?.avatar
        const controls = this.profileForm.controls;
        controls['username']?.patchValue(this.profileData?.username);
        controls['bio']?.patchValue(this.profileDetails?.bio);
        controls['email']?.patchValue(this.profileData?.email);
        controls['phone']?.patchValue(this.profileData?.mobileNumber);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}

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
  formData=new FormData()


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
    if(this.profileForm.valid){
      const val = this.profileForm.value;
      this.formData.append('username',val.username)
      this.formData.append('email',val.email);
      this.formData.append('address',val.address);
      this.formData.append('bio',val.bio);
      this.formData.append('phone',val.phone);
      this.formData.append('dob ',val.dob);
      this.formData.append('avatar',val.avatar)
      this.service.profile(this.formData).subscribe({
        next:(res)=>{
          console.log(res);
        },error:(err)=>{
          console.log(err);
        }
      })
    }
    // console.log(this.profileForm.value);
    // this.service.profile(this.profileForm.value).subscribe((res) => {
    //   alert('Profile Updated Successfully');
    // });
  }
  onChange(event:any){
    const  files = event.target.files;
    this.formData.append('avatar',files[0])
  }
}

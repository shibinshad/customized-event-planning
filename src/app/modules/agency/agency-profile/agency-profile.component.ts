import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormValidationService } from '../../user/services/form-validation.service';
import { AgencyService } from '../service/agency.service';

@Component({
  selector: 'app-agency-profile',
  templateUrl: './agency-profile.component.html',
  styleUrls: ['./agency-profile.component.css'],
})
export class AgencyProfileComponent {
  profileForm!: FormGroup;
  formData = new FormData();
  profileData: any;
  profileDetails: any;
  img: string = '';

  constructor(
    private fb: FormBuilder,
    private service: FormValidationService,
    private agencyService: AgencyService
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

  // onSubmit(): void {
  //   if (this.profileForm.valid) {
  //     const val = this.profileForm.value;
  //     this.formData.append('username', val.username);
  //     this.formData.append('email', val.email);
  //     this.formData.append('bio', val.bio);
  //     this.formData.append('phone', val.phone);
  //     this.formData.append('location', val.location);
  //     this.service.profile(this.formData).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       },
  //     });
  //   }
  //   this.formData = new FormData();
  // }
  onChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      console.log('kfdgggggggggggggggggggj');
      
      this.formData.append('avatar', file);
    }
  }

  get() {
    this.agencyService.getAgencyDetails().subscribe({
      next: (res: any) => {
       if(res.profile){
        console.log(res);
        this.profileDetails = res?.profile;
        const profile = this.profileDetails?.AgencyProfile;
        // this.profileData=this.profileDetails?.agencyProfile[0]
        this.img=this.profileDetails?.image
        console.log(this.profileDetails);
        const controls = this.profileForm.controls;
        controls['username'].patchValue(this.profileDetails?.name);
        controls['email'].patchValue(this.profileDetails?.email);
        controls['phone']?.patchValue(this.profileDetails?.phone);
        controls['bio'].patchValue(this.profileDetails?.Description);
        controls['location'].patchValue(this.profileDetails?.location);
       }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateprofile() {
    console.log('updated successfully');
    const val = this.profileForm.value;
    console.log(val);
    console.log(this.formData);
    
    
        this.formData.append('username', val.username);
        this.formData.append('email', val.email);
        this.formData.append('bio', val.bio);
        this.formData.append('phone', val.phone);
        this.formData.append('location', val.location);
    this.agencyService.updateProfile(this.formData).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.formData=new FormData()
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from '../service/agency.service';

@Component({
  selector: 'app-media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css'],
})
export class MediaFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: AgencyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  mediaForm!: FormGroup;

  showSuccess: boolean = false;
  formdata = new FormData();
  id: any;
  userDetails: any;
  ngOnInit(): void {
    this.route.params.subscribe((id) => {
      this.id = id['id'];
    });
    this.getFormDetails();
    this.mediaForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      cateringType: ['', Validators.required],
    });
  }

  getFormDetails() {
    this.service.getDetails(this.id).subscribe({
      next: (res) => {
        this.userDetails = res;
        if (this.userDetails) {
          this.setUserDetails(this.userDetails);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  setUserDetails(userDetails: any) {
    console.log(userDetails);
    this.mediaForm.patchValue({
      Name: userDetails.name,
      Description: userDetails.Description,
      price: userDetails.price,
      cateringType: userDetails.Type,
    });
  }

  onChange(event: any) {
    const files = event.target.files;
    this.formdata.append('image', files[0]);
  }

  onSubmit(): void {
    if (!this.id) {
      if (this.mediaForm.valid) {
        console.log('btn clicked');
        const val = this.mediaForm.value;
        this.formdata.append('Name', val.Name);
        this.formdata.append('Description', val.Description);
        this.formdata.append('price', val.price);
        // this.formdata.append('image', val.image);
        this.formdata.append('type', val.cateringType);
        this.formdata.append('category', 'media');
        console.log(val);
        this.service.MediaForm(this.formdata).subscribe({
          next: (res: any) => {
            console.log(res);
            if (res.success) {
              this.showSuccess = true;
              setTimeout(() => {
                this.router.navigate(['/agency/home']);
              }, 3000);
            }
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    } else {
      const val = this.mediaForm.value;

      this.formdata.append('Name', val.Name);
      this.formdata.append('Description', val.Description);
      this.formdata.append('price', val.price);
      this.formdata.append('image', val.image);
      this.formdata.append('type', val.cateringType);
      this.formdata.append('category', 'media');
      this.service.updateMediaForm(this.formdata, this.id).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    this.formdata = new FormData();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../service/agency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css'],
})
export class LocationFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: AgencyService,
    private router: Router
  ) {}

  locationForm!: FormGroup;
  showSuccess: Boolean = false;
  formdata = new FormData();

  ngOnInit(): void {
    this.locationForm = this.fb.group({
      Name: ['', Validators.required],
      Description: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
    });
  }

  onChange(event: any) {
    const files = event.target.files;
    // console.log(files[0]);
    this.formdata.append('image', files[0]);
    // alert("ki")
  }

  onSubmit(): void {
    if (this.locationForm.valid) {
      console.log(this.locationForm.value);
      console.log('btn clicked');
      const val = this.locationForm.value;
      this.formdata.append('Name', val.Name);
      this.formdata.append('Description', val.Description);
      this.formdata.append('price', val.price);
      this.formdata.append('image', val.image);
      this.formdata.append('category', 'Location');
      this.service.Location(this.formdata).subscribe({
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
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgencyService } from '../service/agency.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catering-form',
  templateUrl: './catering-form.component.html',
  styleUrls: ['./catering-form.component.css'],
})
export class CateringFormComponent {
  userDetails: any;
  constructor(private fb: FormBuilder, private service: AgencyService,private router:Router,private route:ActivatedRoute) {}
  cateringForm!: FormGroup;
  showSuccess:Boolean=false;
  id:any;

  formdata = new FormData();
  onChange(event: any) {
    const files = event.target.files;
    this.formdata.append('image', files[0]);
  }

  ngOnInit(): void {
    this.route.params.subscribe((id) => {
      this.id = id['id'];
      // console.log(this.id);
    });
    this.getFormDetails()
    this.cateringForm = this.fb.group({
      Name: [''],
      Discription: [''],
      price: [''],
      image: [''],
      cateringType: [''],
    });
  }
  getFormDetails() {
    this.service.getDetails(this.id).subscribe({
      next: (res) => {
        console.log(res.Description);
        this.userDetails = res;
        // console.log(this.userDetails.Type);
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
    this.cateringForm.patchValue({
      Name: userDetails.name,
      Discription: userDetails.Description,
      price: userDetails.price,
      cateringType: userDetails.Type,
    });
  }

  onSubmit(): void {
    if (this.cateringForm.valid) {
      console.log('btn clicked');
      const val = this.cateringForm.value;
      this.formdata.append('Name', val.Name);
      this.formdata.append('Discription', val.Discription);
      this.formdata.append('price', val.price);
      this.formdata.append('image', val.image);
      this.formdata.append('type', val.cateringType);
      this.formdata.append('category','catering');
      this.service.catering(this.formdata).subscribe({
        next: (res) => {
          console.log(res);
          if(res.success){
            this.showSuccess=true
            setTimeout(() => {
              this.router.navigate(['/agency/home'])
            }, 3000);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}

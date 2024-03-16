import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../service/agency.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decoration-form',
  templateUrl: './decoration-form.component.html',
  styleUrls: ['./decoration-form.component.css'],
})
export class DecorationFormComponent implements OnInit {
  showSuccess: boolean | undefined;
  constructor(
    private fb: FormBuilder,
    private service: AgencyService,
    private router: Router
  ) {}
  decorationForm!: FormGroup;

  formdata = new FormData();

  ngOnInit(): void {
    this.decorationForm = this.fb.group({
      Name: ['', Validators.required],
      Discription: ['', Validators.required],
      price: ['', Validators.required],
      image: [''],
      Type: [''],
    });
  }

  onChange(event: any) {
    const files = event.target.files;
    this.formdata.append('image', files[0]);
  }

  onSubmit(): void {
    if (this.decorationForm.valid) {
      console.log('btn clicked');
      const val = this.decorationForm.value;
      this.formdata.append('Name', val.Name);
      this.formdata.append('Discription', val.Discription);
      this.formdata.append('price', val.price);
      this.formdata.append('category', 'Decoration');
      this.formdata.append('Type',val.Type)
      this.service.Decoration(this.formdata).subscribe({
        next: (res) => {
          console.log(res);
          if (res.success) {
            this.showSuccess = true;
            setTimeout(() => {
              this.router.navigate(['/agency/home']);
            }, 1000);
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}

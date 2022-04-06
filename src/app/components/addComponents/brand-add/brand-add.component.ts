import { BrandService } from './../../../services/brand/brand.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  addBrandFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.addBrandFormGroupBuilder();
  }

  addBrandFormGroupBuilder() {
    this.addBrandFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }
  addBrand() {
    if (this.addBrandFormGroup.valid) {
      let colorModel = Object.assign({}, this.addBrandFormGroup.value);
      this.brandService.addBrands(colorModel).subscribe(
        (response) => {
          console.log(colorModel);

          this.toastrService.success('Brand has been added successfully');
        },
        (errorResponse) => {
          console.log(errorResponse);

          if (errorResponse.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < errorResponse.error.ValidationErrors.length;
              i++
            ) {
              this.toastrService.error(
                errorResponse.error.ValidationErrors[i].ErrorMessage
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Please fill all inputs');
    }
  }
}

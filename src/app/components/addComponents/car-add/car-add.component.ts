import { Car } from 'src/app/models/car';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carAddFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddFormGroup = this.formBuilder.group({
      carName: ['', [Validators.required]],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }

  addCar() {
    if (this.carAddFormGroup.valid) {
      let carModel = Object.assign({}, this.carAddFormGroup.value);
      this.carService.addCar(carModel).subscribe(
        (response) => {
          if (response.success) {
            console.log(response);

            this.toastrService.success(
              'Car Added Successfully',
              'Successfully Added'
            );
          }
        },
        (errorResponse) => {
          for (let i = 0; i < errorResponse.error.Errors.length; i++) {
            this.toastrService.error(
              errorResponse.error.Errors[i].ErrorMessage
            );
          }
        }
      );
    } else {
      this.toastrService.error('Please fill your all Input');
    }
  }
}

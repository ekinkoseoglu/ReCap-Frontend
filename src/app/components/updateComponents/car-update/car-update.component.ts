import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';
import { Car } from './../../../models/car';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css'],
})
export class CarUpdateComponent implements OnInit {
  @Input() id: number;
  updateCarFormGroup: FormGroup;
  currentCar: Car;
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.id;
    this.updateCarFormGroupBuild();
  }
  updateCarFormGroupBuild() {
    this.updateCarFormGroup = this.formBuilder.group({
      id: [this.id],
      carName: ['', [Validators.required]],
      brandId: ['', Validators.required],
      colorId: ['', Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', [Validators.required]],
      description: ['', Validators.required],
    });
  }

  updateCar() {
    if (this.updateCarFormGroup.valid) {
      let carModel = Object.assign({}, this.updateCarFormGroup.value);

      this.carService.updateCar(carModel).subscribe(
        (response) => {
          this.toastrService.success(
            'Car Details Has Changed Successfully',
            'Successfully Change'
          );
        },
        (errorResponse) => {
          if (errorResponse.error.ValidationErrors.length > 0) {
            for (
              let i = 0;
              i < errorResponse.error.ValidationErrors.length;
              i++
            ) {
              console.log(errorResponse.error.ValidationErrors[i].ErrorMessage);
              this.toastrService.error(
                errorResponse.error.ValidationErrors[i].ErrorMessage
              );
            }
          } else {
            this.toastrService.error('Please fill all Car Detail Inputs');
          }
        }
      );
    } else {
      this.toastrService.error('Please fill all Car Detail Inputs');
    }
  }
}

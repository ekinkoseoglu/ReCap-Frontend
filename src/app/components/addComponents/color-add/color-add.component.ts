import { ColorService } from 'src/app/services/color/color.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css'],
})
export class ColorAddComponent implements OnInit {
  addColorFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.addColorFormGroupBuild();
  }

  public addColorFormGroupBuild() {
    this.addColorFormGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  add() {
    if (this.addColorFormGroup.valid) {
      let colorModel = Object.assign({}, this.addColorFormGroup.value);
      this.colorService.addColors(colorModel).subscribe(
        (response) => {
          this.toastService.success(
            'Color has added Successfully',
            'Successfully Added'
          );
        },
        (errorResponse) => {
          for (
            let i = 0;
            i < errorResponse.error.ValidationErrors.length;
            i++
          ) {
            console.log(errorResponse.error.ValidationErrors[i].ErrorMessage);
            this.toastService.error(
              errorResponse.error.ValidationErrors[i].ErrorMessage
            );
          }
        }
      );
    } else {
      this.toastService.error('Please fill you all inputs');
    }
  }
}

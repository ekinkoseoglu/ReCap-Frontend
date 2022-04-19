import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createSignupForm();
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signup() {
    if (this.signupForm.valid) {
      let signupModel = Object.assign({}, this.signupForm.value);
      this.authService.register(signupModel).subscribe(
        (response) => {
          localStorage.setItem('token', 'Bearer ' + response.data.token);
          this.toastrService.success('Signup Successfully');
        },
        (errorResponse) => {
          if (errorResponse.error.ValidationErrors > 0) {
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
          console.log(errorResponse);
        }
      );
    } else {
      this.toastrService.error('Please fill all the blanks');
    }
  }
}

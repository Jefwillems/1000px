import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidatorFn, FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';


function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}

function comparePasswords(control: AbstractControl): { [key: string]: any } {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value ? null : { 'passwordsDiffer': true };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public user: FormGroup;

  get passwordControl(): FormControl {
    return <FormControl>this.user.get('passwordGroup').get('password');
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)], this.serverSideValidateUsername()],
      email: ['', [Validators.required, Validators.email], this.serverSideValidateEmail()],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, passwordValidator(12)]],
        confirmPassword: ['', Validators.required]
      }, { validator: comparePasswords })
    });
  }

  serverSideValidateUsername(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.auth.checkUserNameAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      });
    };
  }

  serverSideValidateEmail() {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this.auth.checkEmailAvailability(control.value).map(available => {
        if (available) {
          return null;
        }
        return { emailAlreadyExists: true };
      });
    };
  }
  onSubmit() {
    this.auth.signup(this.user.value.username, this.passwordControl.value, this.user.value.email).subscribe(val => {
      if (val) {
        this.router.navigate(['/recipe/list']);
      }
    });
  }
}

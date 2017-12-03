import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMsg: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.auth.login(this.user.value.username, this.user.value.password).subscribe(val => {
      if (val) {
        console.log(val);
        if (this.auth.redirectUrl) {
          this.router.navigateByUrl(this.auth.redirectUrl);
          this.auth.redirectUrl = undefined;
        } else {
          this.router.navigate(['/']);
        }
      }
    }, err => {
      this.errorMsg = err.json().message;
    });
  }

}

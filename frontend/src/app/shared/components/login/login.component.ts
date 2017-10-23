import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  private loading: Boolean;
  private returnUrl: string;

  constructor(private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.loading = false;
    auth.getUsers();
  }

  ngOnInit() {
    this.auth.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    const username = (<HTMLInputElement>document.getElementById('username')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    console.log('loggin in');
    console.log(username, password);
    this.auth.login(username, password)
       .subscribe(data => {
         console.log(data);
         this.router.navigate([this.returnUrl]);
       },
       error => {
         this.loading = false;
       });
  }
}

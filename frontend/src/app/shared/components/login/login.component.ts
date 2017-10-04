import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  }

  ngOnInit() {
    this.auth.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    /*this.auth.login(this.model.username, this.model.password)
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.loading = false;
      });*/
  }
}

import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private isLoggedIn: Boolean;

  constructor(private auth: AuthService) {
    this.isLoggedIn = this.auth.isAuthenticated();
  }

  ngOnInit() {
  }

}

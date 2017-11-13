import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  /**
   * Creates an instance of NavigationComponent.
   * @param {AuthService} auth
   * @memberof NavigationComponent
   */
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }

}

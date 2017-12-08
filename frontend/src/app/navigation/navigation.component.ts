import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

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

  get currentUser(): Observable<string> {
    return this.auth.user$;
  }

  logout() {
    this.auth.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/image.model';
import { UserService } from '../../shared/services/user.service';
import 'rxjs/add/operator/map';
import { User } from '../../shared/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private _profile: User;
  private _following: boolean;

  constructor(
    private us: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    this._following = false;
  }

  ngOnInit() {
    this.route.data.subscribe(resolved => {
      console.log(resolved['profile']);
      this._profile = resolved['profile'];
    });
  }

  get profile(): User {
    return this._profile;
  }

  follow($event) {
    this.us.followUser(this._profile.id).subscribe(user => {
      console.log(user);
    });
  }

}

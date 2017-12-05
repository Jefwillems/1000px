import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/image.model';
import { UserService } from '../../shared/services/user.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private _images: Image[];
  private _name: string;

  constructor(private us: UserService) {
    this.us.fetchProfile().subscribe(profile => {
      this._images = profile.pictures.map(pic => Image.fromJSON(pic));
      this._name = profile.username;
    });
  }

  ngOnInit() {
  }

  get images(): Image[] {
    return this._images;
  }

  get username(): string {
    return this._name;
  }

}

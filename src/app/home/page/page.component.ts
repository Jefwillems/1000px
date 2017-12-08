import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Image } from '../../shared/models/image.model';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  private _images: Image[];

  constructor(
    private us: UserService,
    private auth: AuthService) { }

  ngOnInit() {
    this.us.fetchActivity().subscribe(images => {
      this._images = images;
    });
  }
  get images(): Image[] {
    return this._images;
  }
}

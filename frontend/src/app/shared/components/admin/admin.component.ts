import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  private _images: Image[];

  constructor(private is: ImageService) { }

  ngOnInit() {
    this.is.fetchFresh().subscribe(imgs => {
      this._images = imgs;
    });
  }

  get images() {
    return this._images;
  }

  remove(id) {
    this.is.remove(id).subscribe(img => {
      this._images = this._images.filter(value => img.id !== value.id);
    });
  }

  flag(id) {
    this.is.flag(id).subscribe(img => {
      console.log(img);
    });
  }
}

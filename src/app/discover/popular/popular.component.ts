import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/image.model';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {

  private _images: Image[];

  constructor(private is: ImageService) {
    this.is.fetchPopular().subscribe(images => {
      this._images = images;
    });
  }

  ngOnInit() {
  }

  get images() {
    return this._images;
  }

}

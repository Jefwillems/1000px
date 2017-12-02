import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/image.model';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'app-fresh',
  templateUrl: './fresh.component.html',
  styleUrls: ['./fresh.component.scss']
})
export class FreshComponent implements OnInit {

  private _images: Image[];

  constructor(private imageService: ImageService) {
    this.imageService.fetchFresh().subscribe(images => {
      this._images = images;
      images.forEach(element => {
        console.log(element);

      });
    });
  }

  ngOnInit() {
  }

  get images() {
    return this._images;
  }

}

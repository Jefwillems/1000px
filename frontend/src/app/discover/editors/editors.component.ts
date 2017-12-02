import { Component, OnInit } from '@angular/core';
import { Image } from '../../shared/models/image.model';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'app-editors',
  templateUrl: './editors.component.html',
  styleUrls: ['./editors.component.scss']
})
export class EditorsComponent implements OnInit {

  private _images: Image[];

  constructor(private is: ImageService) {
    this.is.fetchPicked().subscribe(images => {
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

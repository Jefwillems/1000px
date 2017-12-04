import { Component, OnInit } from '@angular/core';
import { Image } from '../shared/models/image.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  public picture: Image;

  constructor() { }

  ngOnInit() {
  }

}

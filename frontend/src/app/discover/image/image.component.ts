import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../shared/models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() public image: Image;
  public url: String;
  constructor() { }

  ngOnInit() {
    this.url = this.image.pathToPicture;
  }

}

import { Component, OnInit, Renderer, Input } from '@angular/core';
import { Image } from '../shared/models/image.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageService } from '../shared/services/image.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {

  public img: Image;
  public liked: boolean;
  @Input() public returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private is: ImageService) {
    this.liked = false;
  }

  ngOnInit() {
    this.route.data.subscribe(resolved => {
      this.img = resolved['picture'];
    });
    this.is.hasBeenLiked(this.img.id).subscribe(bool => {
      this.liked = bool;
    });

  }

  like($event) {
    if (this.liked) {
      this.liked = false;
      this.is.unlike(this.img.id).subscribe(pic => {
        this.img = pic;
      });
    } else {
      this.liked = true;
      this.is.like(this.img.id).subscribe(pic => {
        this.img = pic;
      });
    }

  }

}

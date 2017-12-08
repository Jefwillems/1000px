import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../shared/models/blog-post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {

  private _blogpost: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(resolved => {
      this._blogpost = resolved['blogpost'];
    });
  }

  get blogpost() {
    return this._blogpost;
  }

}

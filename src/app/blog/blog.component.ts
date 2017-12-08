import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { BlogPost } from '../shared/models/blog-post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  private _posts: BlogPost[];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getLatestCreations().subscribe(posts => {
      this._posts = posts;
    });
  }

  get posts(): BlogPost[] {
    return this._posts;
  }
}

import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';

@Injectable()
export class BlogService {

  blogPosts: BlogPost[];

  constructor() {
    this.blogPosts = [
      {
        title: 'Photography 101',
        body: 'Loren ipsum blablablab labjkdajksbdajksdbs kdsjhsjkdfhsdjkfbsdjkbfjs jkdfjkdhfjksdhfkds sdhfsduhfsdjfhsdjfs',
        author: 'Jef Willems',
        date_created: new Date(),
        date_modified: new Date()
      },
      {
        title: 'Choosing the right lens',
        body: 'Loren ipsum blablablab labjkdajksbdajksdbs kdsjhsjkdfhsdjkfbsdjkbfjs jkdfjkdhfjksdhfkds sdhfsduhfsdjfhsdjfs',
        author: 'Jef Willems',
        date_created: new Date(2017, 8, 12),
        date_modified: new Date(2017, 8, 23)
      }
    ];
  }

  getLatestCreations(): BlogPost[] {
    return this.blogPosts.sort((a, b): number => {
      const aStamp = a.date_created.getTime();
      const bStamp = b.date_created.getTime();
      return aStamp - bStamp;
    });
  }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { BlogPost } from '../../shared/models/blog-post.model';
import { BlogService } from '../../shared/services/blog.service';

@Injectable()
export class BlogResolver implements Resolve<BlogPost> {
    constructor(private bs: BlogService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BlogPost> {
        return this.bs.getPost(route.params['id']);
    }
}

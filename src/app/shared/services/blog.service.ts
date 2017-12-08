import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const fromJSON = (json): BlogPost => {
  return BlogPost.fromJSON(json);
};

@Injectable()
export class BlogService {

  private _url = '/api/blog';

  constructor(
    private http: Http,
    private auth: AuthService) { }

  getLatestCreations(): Observable<BlogPost[]> {
    return this.http.get(this._url + '/all')
      .map(response => {
        return response.json().map(fromJSON);
      });
  }

  uploadPost(title: string, text: string): Observable<BlogPost> {
    console.log(title, text);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('text', text);
    return this.http.post(
      this._url + '/add',
      {
        title: title,
        text: text
      },
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(response => response.json()).map(fromJSON);
  }

  getPost(id: string): Observable<BlogPost> {
    return this.http.get(this._url + '/get/' + id)
      .map(response => response.json()).map(fromJSON);
  }
}

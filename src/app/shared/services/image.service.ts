import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/image.model';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

const fromJSON = (img): Image => Image.fromJSON(img);

@Injectable()
export class ImageService {
  private _url = '/api/img/';

  constructor(private http: Http, private auth: AuthService) { }


  fetchFresh(): Observable<Image[]> {
    return this.http.get(this._url + 'fresh').map(response => {
      return response.json().map(fromJSON);
    });
  }


  fetchPopular(): Observable<Image[]> {
    return this.http.get(this._url + 'popular').map(response => {
      return response.json().map(fromJSON);
    });
  }

  fetchPicked(): Observable<Image[]> {
    return this.http.get(this._url + 'picks').map(response => {
      return response.json().map(fromJSON);
    });
  }

  fetchImage(id: String): Observable<Image> {
    return this.http.get(this._url + 'get/' + id).map(response => response.json()).map(json => {
      const img: Image = Image.fromJSON(json);
      return img;
    });
  }

  hasBeenLiked(id: String): Observable<boolean> {
    return this.http.get(this._url + 'hasBeenLiked/' + id,
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json())
      .map(json => json.response);
  }

  upload(
    title: string,
    file: File,
    description: string,
    camera: string,
    lens: string
  ): Observable<Image> {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('picture', file);
    if (description) {
      formData.append('description', description);
    }
    if (camera) {
      formData.append('camera', camera);
    }
    if (lens) {
      formData.append('lens', lens);
    }
    return this.http.post(
      `${this._url}add`,
      formData,
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => res.json()).map(fromJSON);
  }

  like(id: string): Observable<Image> {
    return this.http.post(this._url + 'like/' + id,
      new FormData(),
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(fromJSON);
  }

  unlike(id: string): Observable<Image> {
    return this.http.post(this._url + 'unlike/' + id,
      new FormData(),
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(res => res.json()).map(fromJSON);
  }

  remove(id): Observable<Image> {
    return this.http.delete(this._url + 'remove/' + id,
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(res => res.json()).map(obj => Image.fromJSON(obj));
  }

  flag(id): Observable<Image> {
    return this.http.post(this._url + 'flag/' + id,
      new FormData(),
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(res => res.json()).map(json => Image.fromJSON(json));
  }

}

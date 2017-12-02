import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/image.model';
import { Http } from '@angular/http';

@Injectable()
export class ImageService {
  private _url = '/api/img/';

  constructor(private http: Http) { }


  fetchFresh(): Observable<Image[]> {
    return this.http.get(this._url + 'fresh').map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  fetchPicked(): Observable<Image[]> {
    return this.http.get(this._url + 'picks').map(response => {
      console.log(response.json());
      return response.json();
    });
  }

  fetchImage(id: String): Observable<Image> {
    return this.http.get(this._url + id).map(response => response.json());
  }
}

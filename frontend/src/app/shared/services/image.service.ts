import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/image.model';
import { Http } from '@angular/http';

@Injectable()
export class ImageService {
  private _url = 'localhost:4200/api/img/';

  constructor(private http: Http) { }


  fetchFresh(): Observable<Image[]> {
    return this.http.get(this._url + 'fresh').map(response => response.json());
  }
}

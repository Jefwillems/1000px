import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/image.model';
import { Http } from '@angular/http';
import { AuthService } from './auth.service';
import { Headers } from '@angular/http';

@Injectable()
export class ImageService {
  private _url = '/api/img/';

  constructor(private http: Http, private auth: AuthService) { }


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

  upload(title: string, file: File): Observable<Image> {
    console.log({ title: title, file: file });
    const formData = new FormData();
    formData.append('title', title);
    formData.append('picture', file);
    return this.http.post(
      `${this._url}add`,
      formData,
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => res.json());
  }
}

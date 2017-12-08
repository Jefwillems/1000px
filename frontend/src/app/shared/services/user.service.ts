import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Image } from '../models/image.model';

@Injectable()
export class UserService {
  private _url = '/api/users/';

  constructor(private http: Http, private auth: AuthService) { }

  fetchActivity(): Observable<Image[]> {
    return this.http.get(
      this._url + 'activity',
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(response => {
      return response.json().map(json => Image.fromJSON(json));
    });
  }

  fetchProfile(id?: string, deep: boolean = false): Observable<User> {
    return this.http.get(
      this._url + 'profile/' + id,
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => res.json()).map(json => User.fromJSON(json, deep));
  }

  isAdmin(): Observable<boolean> {
    return this.http.get(
      this._url + 'isAdmin',
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => {
      return res.json().isAdmin;
    });
  }
  fetchLoggedIn(deep: boolean = false): Observable<User> {
    return this.http.get(
      this._url + 'loggedUser',
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => res.json()).map(json => {
      console.log(json);
      return User.fromJSON(json, deep);
    });
  }

  followUser(id: string): Observable<User> {
    return this.http.post(this._url + 'follow',
      { id: id },
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) })
      .map(response => response.json()).map(json => User.fromJSON(json, true));
  }

}

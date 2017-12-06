import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  private _url = '/api/users/';

  constructor(private http: Http, private auth: AuthService) { }


  fetchProfile(): Observable<User> {
    return this.http.get(
      this._url + 'profile',
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => res.json());
  }

  isAdmin(): Observable<boolean> {
    return this.http.get(
      this._url + 'isAdmin',
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => {
      return res.json().isAdmin;
    });
  }
}

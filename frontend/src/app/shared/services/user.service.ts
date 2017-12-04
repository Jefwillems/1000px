import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  private _url = '/api/users/';

  constructor(private http: Http, private auth: AuthService) { }


  fetchProfile() {
    return this.http.get(
      this._url + 'profile',
      { headers: new Headers({ Authorization: `Bearer ${this.auth.token}` }) }
    ).map(res => res.json());
  }
}

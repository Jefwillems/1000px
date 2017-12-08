import { BehaviorSubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { StorageManagerService } from './storage-manager.service';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class AuthService {

  private url = '/api/';
  private _user$: BehaviorSubject<string>;
  public redirectUrl: string;

  constructor(private http: Http,
    private storageManager: StorageManagerService) {
    const current = this.storageManager.retrieveObject('currentUser');
    this._user$ = new BehaviorSubject<string>(current && current.username);
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token() {
    return this.storageManager.retrieveObject('currentUser').token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(this.url + 'auth/login', { username: username, password: password })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          this.storageManager.store('currentUser', { username: username, token: token });
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }

  logout() {
    if (this.user$.getValue()) {
      this.storageManager.removeItem('currentUser');
      setTimeout(() => this._user$.next(null));
    }
  }

  checkUserNameAvailability(username: string): Observable<boolean> {
    return this.http.post(`${this.url}auth/checkusername`, { username: username }).map(res => res.json())
      .map(item => {
        if (item.username === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      });
  }

  checkEmailAvailability(email: string): Observable<boolean> {
    return this.http.post(
      `${this.url}auth/checkemail`,
      { email: email })
      .map(res => res.json()).map(item => {
        if (item.email === 'alreadyexists') {
          return false;
        } else {
          return true;
        }
      });
  }

  signup(username: string, password: string, email: string): Observable<boolean> {
    return this.http.post(`${this.url}auth/signup`, { username: username, password: password, email: email })
      .map(res => res.json()).map(res => {
        const token = res.token;
        if (token) {
          this.storageManager.store('currentUser', { username: username, token: res.token });
          this._user$.next(username);
          return true;
        } else {
          return false;
        }
      });
  }


}

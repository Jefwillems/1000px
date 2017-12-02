import { BehaviorSubject, Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { StorageManagerService } from './storage-manager.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private url = '/api/auth';
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
    return this.http.post(this.url + '/login', { username: username, password: password })
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
}

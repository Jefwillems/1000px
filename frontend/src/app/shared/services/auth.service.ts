import { StorageManagerService } from './storage-manager.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000';
  private token: string;

  constructor(private http: Http,
    private storageManager: StorageManagerService) {
    const current = this.storageManager.retrieveObject('currentUser');
    this.token = current && current.token;
  }

  public logout() {
    // remove user from local storage to log user out
    this.storageManager.removeItem('currentUser');
  }

  public login(username: string, password: string) {
    return this.http.post(this.url + '/api/auth/login', { username: username, password: password })
      .map((response: Response) => {
        console.log(response);
        // login successful if there's a jwt token in the response
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.storageManager.store('currentUser', JSON.stringify({ username: response.json().user.username, token: token }));
        } else {
          this.logout();
        }
      });
  }

  public getUsers() {
    this.http.get(this.url + '/api/users/all').map((response: Response) => {
      const obj = response.json();
      console.log(obj);
    });
  }

  public isAuthenticated(): boolean {
    const user = this.storageManager.retrieveObject('currentUser');
    return user && user.token;
  }
  public cheat() {
    this.storageManager.store('currentUser', { token: 'sdkufhsdkfhj' });
  }
}

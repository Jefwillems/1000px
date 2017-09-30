import { StorageManagerService } from './storage-manager.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private url = 'http://localhost:3000';

  constructor(private http: Http,
    private storageManager: StorageManagerService) { }

  public isAuthenticated(): Boolean {
    return true;
  }

  public logout() {
    // remove user from local storage to log user out
    this.storageManager.removeItem('currentUser');
  }

  public login(username: string, password: string) {
    return this.http.post(this.url + '/api/auth/login', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.storageManager.store('currentUser', JSON.stringify(user));
        }
      });
  }

}

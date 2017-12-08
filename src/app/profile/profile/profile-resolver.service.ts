import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from '../../shared/models/user.model';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class ProfileResolver implements Resolve<User> {
    constructor(private us: UserService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
        if (route.params['id']) {
            return this.us.fetchProfile(route.params['id'], true);
        } else {
            return this.us.fetchLoggedIn(true);
        }
    }
}

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Image } from '../shared/models/image.model';
import { ImageService } from '../shared/services/image.service';

@Injectable()
export class PictureResolver implements Resolve<Image> {
    constructor(private is: ImageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Image> {
        return this.is.fetchImage(route.params['id']);
    }
}

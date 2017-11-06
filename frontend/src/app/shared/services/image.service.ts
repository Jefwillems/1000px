import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Image } from '../models/image.model';

@Injectable()
export class ImageService {

  constructor() { }


  fetchFresh(): Observable<Image[]> {
    return new Observable<Image[]>();
  }
}

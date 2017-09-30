import { Injectable } from '@angular/core';

@Injectable()
export class StorageManagerService {

  constructor() { }

  public store(key: string, data: Object) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  public retrieveObject(key: string) {
    const objectString = sessionStorage.getItem(key);
    return JSON.parse(objectString);
  }

  public exists(key: string) {
    return sessionStorage.getItem(key) !== null;
  }
}

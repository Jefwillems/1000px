import { Injectable } from '@angular/core';

@Injectable()
export class StorageManagerService {

  constructor() { }

  public store(key: string, data: Object) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public retrieveObject(key: string) {
    const objectString = localStorage.getItem(key);
    return JSON.parse(objectString);
  }

  public exists(key: string) {
    return localStorage.getItem(key) !== null;
  }

  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
}

import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() { }
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }
  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  genarateRandomId() {
    return uuid.v4();
  }
  getRandomAvatar() {
    return `avatar_${Math.floor(Math.random() * 3) + 1}`
  }
  cloneObj(obj) {

    let cloneObj = {}

    if (typeof (obj) !== 'object') {
      return obj;
    }

    for (let key in obj) {
      cloneObj[key] = this.cloneObj(obj[key])
    }

    return cloneObj

  }
}

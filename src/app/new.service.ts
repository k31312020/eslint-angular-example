import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor() { }

  common() {
    console.log('this is running from service');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GiftServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GiftServiceProvider {
  apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';

  constructor(public http: HttpClient) {
    console.log('Hello GiftServiceProvider Provider');
  }

  getGiftSuggestions() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/gift').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  order(customerOrder) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/order', customerOrder).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

}

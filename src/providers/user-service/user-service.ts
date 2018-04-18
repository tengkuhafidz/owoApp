import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the UserServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServiceProvider {
  apiUrl = 'http://localhost:8080/OwoGifting-war/Resources';

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello UserServiceProvider Provider');
  }

  getUser() {
    return new Promise(resolve => {
      this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  login(cUserName: string, cPassword:string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/login', { cUserName: cUserName, cPassword: cPassword}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }

  register(cName: string, cEmail: string, cUserName: string, cPassword:string) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/register', { cName: cName, cEmail: cEmail, cUserName: cUserName, cPassword: cPassword}).subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      });
    });
  }
}

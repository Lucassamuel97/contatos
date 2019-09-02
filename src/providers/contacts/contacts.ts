import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContactsProvider {

  apiUrl = 'https://contacts-v1-dw2.herokuapp.com';

  constructor(public http: HttpClient) {
    console.log('Hello ContactsProvider Provider');
  }

  getContacts() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/contacts.json').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  addContact(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + '/contacts.json', data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateContact(id: number, data) {
    return new Promise((resolve, reject) => {
      this.http.put(this.apiUrl + '/contacts/' + id + '.json', data)
        .subscribe(res => {
            resolve(res);
        }, (err) => {
            reject(err);
        });
    });
  }

  getContact(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl + '/contacts/' + id + '.json')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  destroyContact(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiUrl + '/contacts/' + id + '.json')
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}

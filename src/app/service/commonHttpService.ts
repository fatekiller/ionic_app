import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Apis } from "./Apis"
import { Reply } from "../models/Reply"
import { Storage } from "@ionic/storage";

import 'rxjs/add/operator/toPromise';

/*
 Generated class for the HomeService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class CommonHttpService {

  private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' });

  constructor(public http: Http,
    protected storage: Storage) {
    console.log('Hello HomeService Provider');

  }

  commonPost(url, argsList: Array<any>): Promise<any> {
    return this.http.post(url, this.getParaString(argsList), { headers: this.headers })
      .toPromise()
      .then(response => {
        let reply: Reply = response.json()
        if (reply.rs) {
          return reply
        } else {
          console.log(reply.head.errInfo)
        }
      }).catch(this.handleError)
  }

  private getParaString(list: Array<any>): string {
    let result = '';
    while (list.length > 0) {
      let para = list.pop()
      result = result.concat(`&${para.name}=${para.value}`);
    }
    return result.substring(1, result.length);
  }


  login(username: string, password): Promise<Reply> {
    const url = Apis.login
    return this.http.post(url, "username=" + username + "&password=" + password, { headers: this.headers })
      .toPromise()
      .then(response => response.json() as Reply)
      .catch(this.handleError)

  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

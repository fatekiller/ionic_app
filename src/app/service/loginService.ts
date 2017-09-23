import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Apis } from './Apis'
import { Reply } from '../models/Reply'
import { CommonHttpService } from "./commonHttpService";
//import { User } from 'models/User'

import 'rxjs/add/operator/toPromise';

/*
 Generated class for the HomeService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class LoginService {

  constructor(public http: Http, public commonService: CommonHttpService) {
  }


  login(username: string, password: string): Promise<Reply> {
    let paraList: Array<any> = new Array<any>();
    paraList.push({ name: 'username', value: username });
    paraList.push({ name: 'password', value: password });
    let promise = this.commonService.commonPost(Apis.login, paraList);
    return promise;
  }

}

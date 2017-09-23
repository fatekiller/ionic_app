import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from "../../app/service/loginService"
import { Reply } from "../../app/models/Reply";

@Component({
  templateUrl: 'login.html'
})
export class LoginPage {

  username = ''
  password = ''
  response: Reply
  constructor(public navCtrl: NavController, private loginService: LoginService) {

  }

  login() {

    this.loginService.login(this.username, this.password).then(response => { this.response = response; console.log(response) });
  }
  toList() {
    // this.navCtrl.push(ListPage, {
    //   item: {
    //     hh: ''
    //   }
    // })
  }
}

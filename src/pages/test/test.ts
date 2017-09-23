import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { LoginService } from '../../app/service/loginService';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public service: LoginService) {
  }

  ionViewDidLoad() {
    this.service.login('飞飞来了', 'liujie199494');
    console.log('ionViewDidLoad TestPage');
    this.storage.set("user", { username: 'username', password: 'password' });
    this.storage.get("user").then(value => { console.log(value) }).catch((err) => console.log("not found", err));
    this.storage.get("pass").then(value => { console.log(value) }).catch((err) => console.log("not found", err));
  }

}

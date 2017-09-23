import { Component, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListRefLoadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'list-ref-load',
  templateUrl: 'list-ref-load.html',
})
export class ListRefLoadPage {
  @Output()
  public refreshTopic: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public loadMoreTopic: EventEmitter<any> = new EventEmitter<any>();


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListRefLoadPage');
  }

  refreshTopic_func(refresher) {
    this.refreshTopic.emit(refresher);
  }

  loadMoreTopic_func(event) {
    this.loadMoreTopic.emit(event);
  }


}

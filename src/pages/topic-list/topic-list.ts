import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicDetailPage } from "../topic-detail/topic-detail";

/**
 * Generated class for the TopicListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-list',
  templateUrl: 'topic-list.html',
})
export class TopicListPage {

  @Input('topicList')
  public topicList: Array<any> = new Array<any>();
  @Output()
  public addTopic: EventEmitter<any> = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicListPage');
  }

  goTopicDetail(topicId) {
    this.navCtrl.push(TopicDetailPage, { topicId: topicId })
  }
  addClick() {
    console.log("click");
    this.addTopic.emit(1);
  }
}

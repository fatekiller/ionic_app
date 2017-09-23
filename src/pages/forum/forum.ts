import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumService } from "../../app/service/forumListService";
import { LoadingService } from "../../app/service/loadingService";
import { TopicService } from "../../app/service/topicService";

/**
 * Generated class for the ForumPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  field1: any = {};
  field2: any = {};
  fields: Array<any>;
  topicList = [];
  currentPage = 1;
  count = 100;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingService,
    public topicService: TopicService,
    public forumService: ForumService) {
    this.field1.board_list = []
    forumService.getAllForumList().then((data) => {
      console.log(data)
      this.fields = data;
      this.field1 = data[0];
      console.log(this.field1);
      this.field2 = this.field1.board_list[0];
      console.log('field2', this.field2);
      this.getData(null);
    }).catch((e) => {
      loading.basicAlert("获取板块信息出错", e);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  getData(infinite) {
    if (this.topicList.length == this.count) {
      this.loading.basicAlert("没有更多内容了", "提示");
      if (infinite != null) {
        infinite.complete();
      }
      return;
    }
    this.topicService.getTopicByBoard(this.field2.board_id, this.currentPage).then((result) => {
      this.topicList = this.topicList.concat(result.list);
      this.count = result.sum;
      console.log(result);
      if (infinite != null) {
        infinite.complete();
      }
    });
  }

  refreshData(refresher) {
    this.count = 0;
    this.currentPage = 1;
    this.topicService.getTopicByBoard(this.field2.board_id, this.currentPage).then((result) => {
      this.topicList = result.list;
      this.count = result.sum;
      console.log(result);
      if (refresher != null) {
        refresher.complete();
      }
    });
  }

  change() {
    this.field2 = this.field1.board_list[0];
  }

  change2() {
    this.refreshData(null)
    console.log('field2', this.field2);
    console.log('fields', this.fields);
  }
}

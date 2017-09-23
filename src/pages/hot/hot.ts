import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "@ngx-translate/core";
import { TopicService } from "../../app/service/topicService";
import { Dialogs } from "@ionic-native/dialogs";
import { LoadingService } from '../../app/service/loadingService';

/**
 * Generated class for the HotPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hot',
  templateUrl: 'hot.html',
})
export class HotPage {
  private hotTopicList = [];
  private newTopicList = [];
  private currentHotPage = 1
  private currentNewPage = 1
  type = "hot"
  private hotCount;
  private newCount;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    public topicService: TopicService,
    public loading: LoadingService,
    public dialog: Dialogs) {
    loading.presentLoading(1000);
    this.topicService.getHotTopic(this.currentHotPage).then((result) => {
      console.log(result);
      this.hotTopicList = result.list;
      this.hotCount = result.sum;
    })
    this.topicService.getNewTopics(this.currentNewPage).then((result) => {
      console.log(result);
      this.newTopicList = result.list;
      this.newCount = result.sum;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotPage');
  }

  //下拉刷新
  refreshData(refresher) {
    if (this.type == 'hot') {
      this.currentHotPage = 1;
      this.topicService.getHotTopic(this.currentHotPage).then((result) => {
        console.log(result);
        this.hotTopicList = result.list;
        this.hotCount = result.sum;
        refresher.complete();
      })
    } else if (this.type == 'new') {
      this.currentNewPage = 1;
      this.topicService.getNewTopics(this.currentNewPage).then((result) => {
        console.log(result);
        this.newTopicList = result.list;
        this.newCount = result.sum;
        refresher.complete();
      })
    }
  }

  //上拉加载
  getData(infinite) {
    if (this.type === "hot") {
      if (this.hotTopicList.length == this.hotCount) {
        this.loading.basicAlert("没有更多内容了", "提示");
        infinite.complete();
        return;
      } else {
        this.currentHotPage++;
        this.loading.presentLoading(1000);
        this.topicService.getHotTopic(this.currentHotPage).then((result) => {
          console.log(result);
          this.hotTopicList = this.hotTopicList.concat(result.list);
          infinite.complete();
        })
      }
    } else {
      if (this.hotTopicList.length == this.newCount) {
        this.loading.basicAlert("没有更多内容了", "提示");
        infinite.complete();
        return;
      } else {
        this.currentNewPage++;
        this.loading.presentLoading(1000);
        this.topicService.getNewTopics(this.currentNewPage).then((result) => {
          console.log(result);
          this.newTopicList = this.newTopicList.concat(result.list);
          infinite.complete();
        })
      }
    }
  }

  addTopic(a) {
    console.log(a);
  }

}

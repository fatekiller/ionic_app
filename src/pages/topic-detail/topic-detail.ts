import { Component } from '@angular/core';
import { PostService } from "../../app/service/postService";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TopicDetail } from "../../app/models/TopicDetail";

/**
 * Generated class for the TopicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html',
})
export class TopicDetailPage {

  page = 1
  topicDetail = new TopicDetail()
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public postService: PostService) {
    this.postService.getPost(this.page, this.navParams.data.topicId).then((topic) => {
      console.log(topic);
      this.topicDetail = topic;
    });
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad TopicDetailPage');
  }
  getData() {

  }

}

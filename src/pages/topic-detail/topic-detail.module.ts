import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicDetailPage } from './topic-detail';

@NgModule({
  declarations: [
    TopicDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TopicDetailPage),
  ],
})
export class TopicDetailPageModule {}

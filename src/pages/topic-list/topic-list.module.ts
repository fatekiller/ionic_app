import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicListPage } from './topic-list';
import { TopicDetailPageModule } from "../topic-detail/topic-detail.module";

@NgModule({
  declarations: [
    TopicListPage,
    //TopicItemPage
  ],
  imports: [
    IonicPageModule.forChild(TopicListPage),
    TopicDetailPageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    TopicListPage
  ],
  providers: [
    //TopicItemPage
  ]
})
export class TopicListPageModule { }

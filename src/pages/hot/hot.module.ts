import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotPage } from './hot';
//import { TopicListPageModule } from '../topic-list/topic-list.module';



@NgModule({
  declarations: [
    HotPage,
  ],
  imports: [
    IonicPageModule.forChild(HotPage),
    //TopicListPageModule
  ]
})
export class HotPageModule { }

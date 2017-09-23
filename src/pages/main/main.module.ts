import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { TranslateModule } from '@ngx-translate/core';
import { HotPageModule } from '../hot/hot.module'

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    TranslateModule.forChild(),
    HotPageModule
  ]
})
export class MainPageModule { }

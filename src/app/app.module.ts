import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dialogs } from "@ionic-native/dialogs";
//根模块
import { MyApp } from './app.component';
//页面模块
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { LaunchPage } from '../pages/launch/launch';
import { TestPage } from "../pages/test/test";
import { TopicDetailPage } from "../pages/topic-detail/topic-detail";
import { HotPage } from "../pages/hot/hot";

import { PersonalPage } from '../pages/personal/personal'
import { ForumPage } from '../pages/forum/forum'
import { TopicListPage } from '../pages/topic-list/topic-list';
import { ListRefLoadPage } from '../pages/list-ref-load/list-ref-load';
//import { TopicListPageModule } from '../pages/topic-list/topic-list.module';

//服务
import { LoginService } from './service/loginService';
import { CommonHttpService } from "./service/commonHttpService";
import { TopicService } from "./service/topicService";
import { LoadingService } from "./service/loadingService";
import { ForumService } from "./service/forumListService";
import { PostService } from "./service/postService";
//指令
import { MyDir } from "./directive/notnull";
//加载文字资源
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
//http module
@NgModule({
  //自定义模块，页面
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    MyDir,
    LaunchPage,
    TestPage,
    HotPage,
    PersonalPage,
    ForumPage,
    //TopicItemPage,
    TopicListPage,
    ListRefLoadPage,
    TopicDetailPage
  ],
  //第三方模块，类库，插件
  imports: [
    //MainPageModule,
    //TopicListPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
  ],
  bootstrap: [IonicApp],//启动模块
  //入口模块
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    LaunchPage,
    TestPage,
    HotPage,
    PersonalPage,
    ForumPage,
    TopicDetailPage
  ],
  //service模块
  providers: [
    ForumService,
    Dialogs,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginService,
    CommonHttpService,
    TopicService,
    LoadingService,
    PostService
  ]
})
export class AppModule { }

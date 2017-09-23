import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";
//import { LaunchPage } from '../pages/launch/launch';
import { TestPage } from '../pages/test/test';
import { MainPage } from "../pages/main/main";
import { Const } from "./service/VALUES";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = MainPage
  testRoot: any = TestPage

  constructor(private translate: TranslateService,
    platform: Platform,
    statusBar: StatusBar,
    storage: Storage,
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initTranslate()
      storage.get("user").then((data) => {
        if (data) {
          Const.user = data;
        }
      });
    });
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');


    if (this.translate.getBrowserLang() !== undefined) {
      this.translate.use(this.translate.getBrowserLang());
    } else {
      this.translate.use('en'); // Set your language here
    }
  }
}

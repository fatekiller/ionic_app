import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Injectable()
export class LoadingService {
    constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    }
    presentLoading(duration: number, tip: string = '加载中...') {
        let loader = this.loadingCtrl.create({
            content: tip,
            duration: duration
        });
        loader.present();
    }
    basicAlert(msg: string, title: string = "提示") {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['OK']
        });
        alert.present();
    }
}
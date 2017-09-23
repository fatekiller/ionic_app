import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPage } from './launch';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LaunchPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPage),
    TranslateModule
  ],
})
export class LaunchPageModule { }

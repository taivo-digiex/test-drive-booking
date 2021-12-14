import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  ionAppName: string;
  ionPackageName: string;
  ionVersionNumber: string;
  ionVersionCode: string | number;
  constructor(
    platform: Platform,
    private appVersion: AppVersion
  ) {
    platform.ready().then(() => {
      this.appVersion.getAppName().then(res => {
        this.ionAppName = res;
      }).catch(error => {
        alert(error);
      });

      this.appVersion.getPackageName().then(res => {
        this.ionPackageName = res;
      }).catch(error => {
        alert(error);
      });

      this.appVersion.getVersionNumber().then(res => {
        this.ionVersionNumber = res;
      }).catch(error => {
        alert(error);
      });

      this.appVersion.getVersionCode().then(res => {
        this.ionVersionCode = res;
      }).catch(error => {
        alert(error);
      });
    });
  }
}

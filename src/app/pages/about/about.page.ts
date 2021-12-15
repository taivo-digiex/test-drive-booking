import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  AppName: string;
  VersionNumber: string;

  constructor(private appVersion: AppVersion) {
    this.appVersion.getAppName().then(value => {
      this.AppName = value;
    }).catch(err => {
      console.log(err);
    });
    this.appVersion.getVersionNumber().then(value => {
      this.VersionNumber = value;
    }).catch(err => {
      console.log(err);
    });
  }

}

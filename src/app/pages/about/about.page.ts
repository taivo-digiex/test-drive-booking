import { Component } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {

  public AppName: string;
  public VersionNumber: string;

  constructor(
    private appVersion: AppVersion,
    private location: Location
  ) {
    this.getAppInfo();
  }

  getAppInfo() {
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

  back() {
    this.location.back();
  }

}

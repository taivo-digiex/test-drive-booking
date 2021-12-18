import { Component, OnInit } from '@angular/core';
import { AppVersion } from '@awesome-cordova-plugins/app-version/ngx';
import { ThemeService } from '../../theme.service'

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {

  public AppName: string;
  public VersionNumber: string;
  public darkValue: any;

  constructor(
    private appVersion: AppVersion,
    private ThemeService: ThemeService
  ) {
    this.getAppInfo();
  }

  get darkBoolean() {
    return this.ThemeService.sharedDarkValue;
  }

  ngOnInit() {
    this.darkValue = this.darkBoolean;
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

  toggleTheme(ev) {
    this.ThemeService.setAppTheme(ev.detail.checked);
  }

}

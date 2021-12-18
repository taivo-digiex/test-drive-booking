import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage-angular';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;

  constructor(private platform: Platform, private router: Router, private location: Location, private storage: Storage, private themeService: ThemeService) {
    this.hardwareBackBtn();
  }

  ngOnInit() {
    this.createStorage();
  }

  hardwareBackBtn() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      const url = this.router.url;
      if (!this.routerOutlet.canGoBack() && url === '/tabs/home') {
        navigator['app'].exitApp();
      }
      else {
        this.location.back();
      }
    });
  }

  async createStorage() {
    await this.storage.create();
    this.getThemeValue();
  }

  getThemeValue() {
    this.storage.get('selected-app-theme').then((value) => {
      this.themeService.setAppTheme(value);
    });
  }
}

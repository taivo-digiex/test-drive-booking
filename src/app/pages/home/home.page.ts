import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription: any;

  constructor(private platform: Platform, private router: Router) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      const url = this.router.url;
      if (url === '/tabs/home') {
        navigator['app'].exitApp();
      }
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor() {}

  public pageTab = [
    { title: 'Weather', url: 'tab2', icon: 'cloud' },
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Setting', url: 'setting', icon: 'settings' },
  ];
}

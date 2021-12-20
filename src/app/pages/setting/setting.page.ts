import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  public darkValue: any;
  public aboutIcon: string = 'alert-circle';
  public darkIcon: string = 'moon';
  public lightIcon: string = 'sunny';

  constructor(private ThemeService: ThemeService) { }

  get darkBoolean() {
    return this.ThemeService.sharedDarkValue;
  }

  ngOnInit() {
    this.darkValue = this.darkBoolean;
  }

  toggleTheme(ev) {
    this.ThemeService.setAppTheme(ev.detail.checked);
  }

}

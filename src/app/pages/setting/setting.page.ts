import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';

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
  public langIcon: string = 'language';
  public languages = [];
  public selected = '';

  constructor(
    private ThemeService: ThemeService,
    private languageService: LanguageService) { }

  get darkBoolean() {
    return this.ThemeService.sharedDarkValue;
  }

  ngOnInit() {
    this.darkValue = this.darkBoolean;
    this.getLangSelected();
  }

  toggleTheme(ev) {
    this.ThemeService.setAppTheme(ev.detail.checked);
  }

  getLangSelected() {
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  select(ev) {
    const lng = ev.target.value;
    this.languageService.setLanguage(lng);
  }

}

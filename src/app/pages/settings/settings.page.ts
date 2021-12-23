import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { ThemeService } from '../../services/theme/theme.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public darkValue: any;
  public aboutIcon: string = 'alert-circle';
  public darkIcon: string = 'moon';
  public lightIcon: string = 'sunny';
  public langIcon: string = 'language';
  public languages = [];
  public selected = '';

  constructor(
    private ThemeService: ThemeService,
    private languageService: LanguageService,
    private location: Location) { }

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

  back() {
    this.location.back();
  }

}

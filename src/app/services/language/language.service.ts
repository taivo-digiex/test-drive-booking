import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

const LNG_KEY = 'selected-language';

@Injectable({
  providedIn: 'root',
})

export class LanguageService {
  
  public selected = '';

  constructor(private translate: TranslateService, private storage: Storage) { }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    const checkLng = this.getLanguages().find(function (e) {
      return e.value == language;
    });
    if (checkLng === undefined) {
      this.translate.setDefaultLang('en');
      this.storage.get(LNG_KEY).then((val) => {
        this.setLanguage('en');
        this.selected = 'en';
      });
    } else {
      this.translate.setDefaultLang(language);
      this.storage.get(LNG_KEY).then((val) => {
        if (val) {
          this.setLanguage(val);
          this.selected = val;
        } else {
          this.setLanguage(language);
          this.selected = language;
        }
      });
    }
  }

  getLanguages() {
    return [
      { text: 'English', value: 'en' },
      { text: 'Tiếng Việt', value: 'vi' },
    ];
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}

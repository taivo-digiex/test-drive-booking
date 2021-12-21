import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

const LNG_KEY = 'selected-language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public selected = '';

  constructor(
    private translate: TranslateService,
    private storage: Storage,
  ) { }

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      } else {
        this.selected = 'en';
      }
    })
  }

  getLanguages() {
    return [
      { text: 'English', value: 'en' },
      { text: 'Tiếng Việt', value: 'vi' }
    ]
  }

  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}

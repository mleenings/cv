import { Injectable } from '@angular/core';
import { L10N } from '../../assets/data/l10n.perso';
import { Subject } from 'rxjs';

@Injectable()
export class LocalizationService {
  defaultLanguage = 'EN'; 
  languageChanged = new Subject();

  public changeLanguage(language): void {
    this.languageChanged.next(L10N[language]);
  }

  public getAll() {
    return L10N;
  }

  public get(language: string) {
    if (L10N.hasOwnProperty(language)) {
      return L10N[language]; // TODO merge with EN as default values
    }
    return this.getDefault();
  }

  public getDefault() {
    let language = this.defaultLanguage;
    try {
      language = JSON.parse(localStorage.getItem('l10n')).language;
    } catch (err) { }
    return L10N[language];
  }
}
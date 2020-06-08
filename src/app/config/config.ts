import { StrictMap, Observable } from 'simple-structures';
import { ConfigModel } from './config.model';
import en from './en';
import fr from './fr';

export const LANGUAGES = ['en', 'fr'] as const;
export type Language = typeof LANGUAGES[number];

export const CONFIG: StrictMap<Language, ConfigModel> = {
  en,
  fr,
};

export class Config {
  private static instance: Config;
  private current: Language;
  private observable: Observable<ConfigModel>;

  public static get() {
    if (this.instance) {
      return this.instance.observable;
    }

    const search = window.location.search;
    const lang = search.includes('lang=fr') ? 'fr' : 'en';

    this.instance = new Config(lang);
    return this.instance.observable;
  }

  private constructor(lang: Language) {
    this.observable = new Observable(CONFIG[lang]);
    this.current = lang;
  }

  static use(lang: Language) {
    const url = window.location.origin + '/?lang=' + lang;
    window.location.replace(url);
  }

  static toggle() {
    this.instance.current === 'en' ? this.use('fr') : this.use('en');
  }
}

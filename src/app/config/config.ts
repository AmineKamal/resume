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
  private observable: Observable<ConfigModel> = new Observable(CONFIG.en);

  public static get() {
    if (this.instance) {
      return this.instance.observable;
    }

    this.instance = new Config();
    return this.instance.observable;
  }

  private constructor() {}

  static use(lang: Language) {
    this.get().replace(CONFIG[lang]);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  public texts = {
    appTitle: {
      en: 'Harmonic anlysis',
      fr: 'Analyse harmonique'
    },
    training: {
      en: 'Training',
      fr: 'Entraînement'
    },
    settings: {
      en: 'Settings',
      fr: 'Options'
    },
    stats: {
      en: 'Statistics',
      fr: 'Statistiques'
    },
    selLevel: {
      en: 'Selected level',
      fr: 'Niveau sélectionné'
    },
    selectLevel: {
      en: 'Please select a level',
      fr: 'Sélectionnez un niveau'
    }
  }

  constructor() { }

  public getAll(): Object {
    return this.texts;
  }
}

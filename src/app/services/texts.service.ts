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
    },
    responseSelection: {
      en: 'Response selection',
      fr: 'Sélection d\'une réponse'
    },
    selectResponse: {
      en: 'Please select a response',
      fr: 'sélectionnez une réponse'
    },
    ok: {
      en: 'OK',
      fr: 'OK'
    },
    newProg: {
      en: 'New chord progression',
      fr: 'Nouvelle progression d\'accords'
    },
    checkAnswers: {
      en: 'Check answers',
      fr: 'Corriger'
    }
  }

  constructor() { }

  public getAll(): Object {
    return this.texts;
  }
}

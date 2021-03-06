import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  private levels = [
    {
      id: 1,
      description: {
        en: 'I or i, IV or iv and V',
        fr: 'I ou i, IV ou iv et V'
      },
      inLite: true
    },
    {
      id: 2,
      description: {
        en: 'vi or bVI',
        fr: 'vi ou bVI'
      },
      inLite: false
    }
  ]; 

  constructor() { }

  public getAll(): Object[] {
    return this.levels;
  }
}

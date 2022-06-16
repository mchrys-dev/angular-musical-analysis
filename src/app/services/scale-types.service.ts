import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScaleTypesService {

  private scaleTypes: any[] = [
    {
      id: 1,
      name: {
        en: 'Major',
        fr: 'Majeur'
      }
    },
    {
      id: 2,
      name: {
        en: 'Harmonic minor',
        fr: 'Mineur harmonique'
      }
    }
  ];

  constructor() { }

  public getAll(): any[] {
    return this.scaleTypes;
  }
}

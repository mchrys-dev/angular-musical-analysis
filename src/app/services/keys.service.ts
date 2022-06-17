import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  private keys = [
    {
      id: 1,
      tonic: 'C',
      I: 'C',
      i: 'Cm',
      IV: 'F',
      iv: 'Fm',
      V: 'G',
      vi: 'Am',
      bVI: 'Ab'
    }
  ];

  constructor() { }

  public getAll(): Object[] {
    return this.keys;
  }
}

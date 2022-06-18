import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {

  private chords = [
    {
      id: 0,
      name: {
        1: '?',
        2: '?'
      }
    },
    {
      id: 1,
      name: {
        1: 'I',
        2: 'i'
      }
    },
    {
      id: 2,
      name: {
        1: 'ii' 
      }
    },
    {
      id: 3,
      name: {
        1: 'iii'
      }
    },
    {
      id: 4,
      name: {
        1: 'IV',
        2: 'iv'
      }
    },
    {
      id: 5,
      name: {
        1: 'V',
        2: 'V'
      }
    },
    {
      id: 6,
      name: {
        1: 'vi',
        2: 'bVI'
      }
    }
  ]

  constructor() { }

  public getAll(): Object[] {
    return this.chords;
  }
}

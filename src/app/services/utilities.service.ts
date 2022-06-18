import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private isProVersion: boolean = false;

  constructor() { }

  public getNavigatorLanguage() {
    return navigator.language.split('-')[0];
  }

  public proVersion(): boolean {
    return this.isProVersion;
  }
}

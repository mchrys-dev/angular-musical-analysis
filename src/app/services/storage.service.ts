import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private selLevelId: number = 1;

  constructor() { }

  public getSelLevelId(): number {
    if(localStorage.getItem('sel_level_id') !== null) {
      this.selLevelId = parseInt(localStorage.getItem('sel_level_id')!);
    }  

    return this.selLevelId;
  }

  public saveSelLevel(selLevelId : number): void {
    localStorage.setItem('sel_level_id', selLevelId.toString());
  }
}

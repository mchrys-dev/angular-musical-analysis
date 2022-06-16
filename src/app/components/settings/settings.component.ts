import { Component, OnInit } from '@angular/core';
import { LevelsService } from 'src/app/services/levels.service';
import { StorageService } from 'src/app/services/storage.service';
import { TextsService } from 'src/app/services/texts.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public lang: string = 'en';
  public texts: any;
  public levels: any;
  public proVersion: boolean = false;
  public selLevel: any;

  constructor(
    public utilitiesService: UtilitiesService,
    public textsService: TextsService,
    public levelsService: LevelsService,
    private storageService: StorageService
  ) {
    this.proVersion = this.utilitiesService.proVersion();
    this.lang = this.utilitiesService.getNavigatorLanguage();
    this.texts = this.textsService.getAll();
    this.levels = this.levelsService.getAll();
    if(!this.proVersion) {
      this.levels = this.levels.filter((level: any) => level.inLite);
    }
    this.selLevel = this.levels.find((level: any) => level.id === this.storageService.getSelLevelId());
  }

  ngOnInit(): void {
    
  }

  public saveSelLevel(): void {
    this.storageService.saveSelLevel(this.selLevel.id);
  }

}

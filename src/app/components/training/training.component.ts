import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { LevelsService } from 'src/app/services/levels.service';
import { ScaleTypesService } from 'src/app/services/scale-types.service';
import { StorageService } from 'src/app/services/storage.service';
import { TextsService } from 'src/app/services/texts.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  public lang: string = 'en';
  public texts: any;
  public levels: any;
  public proVersion: boolean = false;
  public selLevel: any;
  public scaleTypes: any[] = [];

  constructor(
    public utilitiesService: UtilitiesService,
    public textsService: TextsService,
    public levelsService: LevelsService,
    public scaleTypesService: ScaleTypesService,
    public storageService: StorageService
  ) { 
    this.proVersion = this.utilitiesService.proVersion();
    this.lang = this.utilitiesService.getNavigatorLanguage();
    this.texts = this.textsService.getAll();
    this.levels = this.levelsService.getAll();
    this.scaleTypes = this.scaleTypesService.getAll();
    if(!this.proVersion) {
      this.levels = this.levels.filter((level: any) => level.inLite);
    }
    this.selLevel = this.levels.find((level: any) => level.id === this.storageService.getSelLevelId());
  }

  ngOnInit(): void {
    this.generateProg();
  }

  public generateProg(): void {
    const randomScaleTypeId = this.selLevel.scaleTypeIds[Math.floor(Math.random()*this.selLevel.scaleTypeIds.length)];
    console.log(randomScaleTypeId);
  }

}

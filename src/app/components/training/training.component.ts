import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { ChordsService } from 'src/app/services/chords.service';
import { KeysService } from 'src/app/services/keys.service';
import { LevelsService } from 'src/app/services/levels.service';
import { PhrasesService } from 'src/app/services/phrases.service';
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
  public chords: any[] = [];
  public proVersion: boolean = false;
  public selLevel: any;
  public scaleTypes: any[] = [];
  public phrases: any[] = [];
  public keys: any[] = [];

  public phrasesRomanNumerals: any = [];
  public phrasesAbsoluteChords: any = [];

  constructor(
    public utilitiesService: UtilitiesService,
    public textsService: TextsService,
    public levelsService: LevelsService,
    public scaleTypesService: ScaleTypesService,
    public chordsService: ChordsService,
    public phrasesService: PhrasesService,
    public keysService: KeysService,
    public storageService: StorageService
  ) { 
    this.proVersion = this.utilitiesService.proVersion();
    this.lang = this.utilitiesService.getNavigatorLanguage();
    this.texts = this.textsService.getAll();
    this.levels = this.levelsService.getAll();
    this.chords = this.chordsService.getAll();
    this.scaleTypes = this.scaleTypesService.getAll();
    if(!this.proVersion) {
      this.levels = this.levels.filter((level: any) => level.inLite);
    }
    this.selLevel = this.levels.find((level: any) => level.id === this.storageService.getSelLevelId());
    this.phrases = this.phrasesService.getAll().filter((phrase: any) => phrase.levelId === this.selLevel.id);
    this.keys = this.keysService.getAll();
  }

  ngOnInit(): void {
    this.generateProg();
  }

  public generateProg(): void {
    const randomScaleTypeId = this.selLevel.scaleTypeIds[Math.floor(Math.random()*this.selLevel.scaleTypeIds.length)];
    const randomPhrase = this.phrases[Math.floor(Math.random()*this.phrases.length)];

    this.phrasesRomanNumerals = [];
    this.phrasesAbsoluteChords = [];

    randomPhrase.chordIds.forEach((id: number) => {
      const chord = this.chords.find((chord: any) => chord.id === id);
      this.phrasesRomanNumerals.push(chord.name[randomScaleTypeId]);
      this.phrasesAbsoluteChords.push(this.keys[0][chord.name[randomScaleTypeId]]);
    });
    console.log(this.phrasesRomanNumerals);
    console.log(this.phrasesAbsoluteChords);
  }

}

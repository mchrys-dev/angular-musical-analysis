import { Component, OnInit } from '@angular/core';
import { TextsService } from 'src/app/services/texts.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public lang: string = 'en';
  public texts: any;

  constructor(
    private utilitiesService: UtilitiesService,
    private textsService: TextsService
  ) {}

  ngOnInit(): void {
    this.lang = this.utilitiesService.getNavigatorLanguage();
    this.texts = this.textsService.getAll();
  }

}

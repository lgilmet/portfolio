import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import * as $ from 'jquery';

@Component({
  selector: 'app-mtl-aquarium-society',
  templateUrl: './mtl-aquarium-society.component.html',
  styleUrls: ['./mtl-aquarium-society.component.scss']
})
export class MtlAquariumSocietyComponent implements OnInit {

  constructor(
    private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
  }

}

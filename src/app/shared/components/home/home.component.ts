import { Component, OnInit } from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'moviedb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  appTheme = 'default';

  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit() {
  }

  switchTheme(appTheme: string) {
    this.appTheme = appTheme;
  }
}

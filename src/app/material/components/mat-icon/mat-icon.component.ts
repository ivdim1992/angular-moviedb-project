import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'moviedb-mat-icon',
  templateUrl: './mat-icon.component.html',
  styleUrls: ['./mat-icon.component.scss']
})
export class MatIconComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets  /img/examples/thumbup-icon.svg'));
  }

  ngOnInit() {
  }

}

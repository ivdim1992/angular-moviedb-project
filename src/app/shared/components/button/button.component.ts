import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'moviedb-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonText: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTheme = 'default';

  switchTheme(appTheme: string) {
    this.appTheme = appTheme;
  }
}

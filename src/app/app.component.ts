import { Component } from '@angular/core';

import { SettingService } from '@services/setting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private theme = localStorage.getItem('theme');
  constructor(
    private settingService: SettingService,
  ) {
    this.setTheme();
  }

  setTheme(): void {
    if(!this.theme) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.settingService.setTheme((isDarkMode) ? 'dark' : 'light');
    } else {
      this.settingService.setTheme(this.theme as 'dark'|'light');
    }
  }


}

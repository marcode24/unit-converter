import { Component, OnInit } from '@angular/core';

import { SettingService } from '@services/setting.service';

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.css']
})
export class ToggleThemeComponent implements OnInit {
  constructor(
    private settingService: SettingService,
  ) { }

  ngOnInit(): void {
  }

  changeTheme(event: any): void {
    const checked = event.checked;
    this.settingService.setTheme((checked) ? 'dark' : 'light' ); // set local
  }

  get isDarkMode(): boolean {
    return this.settingService.isDarkMode();
  }

}

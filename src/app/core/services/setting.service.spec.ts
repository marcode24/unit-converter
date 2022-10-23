import { TestBed } from "@angular/core/testing";
import { SettingService } from "./setting.service";

describe('SettingService', () => {
  let settingService: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    settingService = TestBed.inject(SettingService);
  });


  it('should be created', () => {
    expect(settingService).toBeTruthy();
  });

  it('Should remove dark theme from body element', () => {
    spyOn(settingService, 'setTheme').withArgs('light').and.callThrough();
    settingService.setTheme('light');
    expect(settingService['bodyElement'].classList.contains('dark')).toBe(false);
  });

  it('Should add dark theme to body element', () => {
    spyOn(settingService, 'setTheme').withArgs('dark').and.callThrough();
    settingService.setTheme('dark');
    expect(settingService['bodyElement'].classList.contains('dark')).toBe(true);
  });

  it('Should return true if body element contains dark theme', () => {
    settingService['bodyElement'].classList.add('dark');
    settingService.isDarkMode();
    expect(settingService.isDarkMode()).toBe(true);
  });

  it('Should return false if body element not contains dark theme', () => {
    settingService.isDarkMode();
    expect(settingService.isDarkMode()).toBe(false);
  });

});

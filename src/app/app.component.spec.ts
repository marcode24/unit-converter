import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SettingService } from '@services/setting.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let settingService: SettingService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        SettingService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    settingService = TestBed.inject(SettingService);
    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set dark theme', () => {
    appComponent['theme'] = 'dark';
    spyOn(settingService, 'setTheme').withArgs('dark');
    settingService.setTheme('dark');
    expect(settingService.setTheme).toHaveBeenCalledWith('dark');
  });

  it('should set light theme', () => {
    appComponent['theme'] = 'light';
    spyOn(settingService, 'setTheme').withArgs('light');
    settingService.setTheme('light');
    expect(settingService.setTheme).toHaveBeenCalledWith('light');
  });

});

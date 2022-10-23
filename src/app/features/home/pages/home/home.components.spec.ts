import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let homeComponent: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    homeComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create home component', () => {
    expect(homeComponent).toBeTruthy();
  });

  it(`should have as path relative '/assets/images'`, () => {
    expect(homeComponent['pathRelative']).toEqual('/assets/images');
  });

  it('should create path image /assest/images/area.png', () => {
    const pathRelative = homeComponent['pathRelative'];
    expect(homeComponent.buildPathImage('area.png')).toEqual(`${pathRelative}/area.png`);
  });

});

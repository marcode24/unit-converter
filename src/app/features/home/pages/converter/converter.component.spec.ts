import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";

import { ConverterComponent } from "./converter.component";

describe('ConverterComponent', () => {
  let converterComponent: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterComponent ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              propertyIndex: 2,
            })
          }
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture = TestBed.createComponent(ConverterComponent);
    converterComponent = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create converter component', () => {
    expect(converterComponent).toBeTruthy();
  });

  it('should ensure property param is valid', () => {
    activatedRoute.params.subscribe(({ propertyIndex }) => {
      expect(propertyIndex).not.toBeNaN();
    });
  });

  it('should navigate to home path if property not found', () => {
    const navigateSpy = spyOn(router, 'navigate');
    converterComponent.loadData('asfa');
    expect(converterComponent.prop).toBeFalsy();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('should update first value from unit form', fakeAsync(() => {
      converterComponent.unitForm.get('firstValue')?.setValue('12');
      converterComponent.unitForm.get('firstValue')?.updateValueAndValidity({ emitEvent: true });
      tick();
      expect(converterComponent.unitForm.get('firstValue')?.value).toEqual('12');

  }));

  it(`should has value '1' in convert options 'indexFrom' if is options first input`, () => {
    converterComponent['optionsFirstInput'] = true;
    converterComponent.changeIndexOption(1);
    expect(converterComponent.convertOptions.indexFrom).toBe(1);
  });

  it(`should has value '1' in convert options 'indexTo' if is not options first input`, () => {
    converterComponent['optionsFirstInput'] = false;
    converterComponent.changeIndexOption(1);
    expect(converterComponent.convertOptions.indexTo).toBe(1);
  });

});
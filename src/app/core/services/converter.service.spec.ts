import { ConverterService } from "./converter.service";

import { IConvert } from "@interfaces/unit.interface";
import { TestBed } from "@angular/core/testing";

describe('ConverterService', () => {

  let converterService: ConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    converterService = TestBed.inject(ConverterService);
  });

  it('should be created', () => {
    expect(converterService).toBeTruthy();
  });

  it(`should return 100 if is ACCELERATION and 'from unit'
      is meter per second squared has value 1 and 'to unit' centimeter
      per second squared`, () => {

        const propsConverter: IConvert = {
          propName: 'Acceleration',
          quantity: 1,
          indexFrom: 0,
          indexTo: 1,
        };
        expect(converterService.convert(propsConverter)).toBe(100);
  });

  it(`should return 538195.5208354861 if is AREA and 'from unit'
      is area has value 500 and 'to unit' square foot`, () => {

        const propsConverter: IConvert = {
          propName: 'Area',
          quantity: 500,
          indexFrom: 2,
          indexTo: 9,
        };
        expect(converterService.convert(propsConverter)).toBe(538195.5208354861);
  });

});

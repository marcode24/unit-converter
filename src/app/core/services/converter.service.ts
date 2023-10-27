import { Injectable } from '@angular/core';

import { IConvert, IProperty } from '@interfaces/unit.interface';

import { properties } from '@constants/unit.constant';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  convert(propsConverter: IConvert): number {
    const { propName, indexFrom, indexTo, quantity } = propsConverter;
    const property: IProperty = properties.find(prop => prop.name === propName) as IProperty;
    const factorIndexFrom: number = property.units[indexFrom].factor;
    const factorIndexTo: number = property.units[indexTo].factor;
    const result: number = (quantity * factorIndexFrom) / factorIndexTo;
    return result;
  }

}

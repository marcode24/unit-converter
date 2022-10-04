import { IProperty } from "@interfaces/unit.interface";

export const properties: IProperty[] = [
  {
    name: 'Acceleration',
    units: [
      {
        name: 'Meter/sq.sec (m/sec^2)',
        factor: 1,
      },
      {
        name: 'Foot/sq.sec (ft/sec^2)',
        factor: 0.3048,
      },
      {
        name: 'Gravity (g)',
        factor: 9.80665,
      },
      {
        name: 'Dalileo (gal)',
        factor: 0.01,
      },
      {
        name: 'Inch/sq.sec (in/sec^2)',
        factor: 2.54e-2,
      },
    ],
  },
  {
    name: 'Area',
    units: [
      {
        name: 'Square meter (m^2)',
        factor: 1,
      },
      {
        name: 'Acre (acre)',
        factor: 2
      },
      {
        name: 'Are',
        factor: 100,
      }
    ]
  }
]
